import { useContext, useEffect, useRef, useState } from "react";
import { Button, Container, Header, Modal, Segment } from "semantic-ui-react";

import { StoreContext } from "./store";
import { toPercent, weightedRandom } from "./utils";

const Wheel = () => {
  const {
    items: [items],
    history: [history, setHistory],
  } = useContext(StoreContext);

  const [width, height] = [750, 750];

  const [result, setResult] = useState({ title: null, weight: null });
  const [resultModalOpen, setResultModalOpen] = useState(false);

  const [spinning, setSpinning] = useState(false);
  const [getsDragged, setGetsDragged] = useState(false);

  const canvasRef = useRef(null);

  const onSpin = () => {
    if (items.length < 1) return;
    const { title, weight } = weightedRandom(items);
    setResult({ title, weight });
    const histItem = { ts: Date.parse(Date()), title, weight };
    setHistory([histItem, ...history]);
    setResultModalOpen(true);
  };

  const draw = (ctx, initialAngle = 0) => {
    const offset = width / 60;
    const border = 5;
    const borderColor = "#000000";
    const arrowColorLeft = "#cece00";
    const arrowColorRight = "#fefe00";
    const arrowW = width / 30;
    const arrowH = height / 20;
    const r = width / 2 - border - offset;
    const cx = width / 2;
    const cy = height / 2;
    const desiredTextW = Math.round(0.8 * r); // text width is 80% of radius
    const minTextH = 10;
    const maxTextH = 100;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.translate(cx, cy);
    ctx.rotate(initialAngle);

    ctx.fillStyle = borderColor;
    ctx.beginPath();
    ctx.arc(0, 0, r + border, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    for (let { title, weight, fg, bg } of items) {
      const angle = 2 * Math.PI * weight;
      const actualMaxTextH = Math.min(
        maxTextH,
        (r - desiredTextW / 2) *
          1.6 *
          Math.sin(Math.min(angle / 2, Math.PI / 2))
      ); // actual maximal text height
      // allowed because of sector size
      const textMeasureIterationNum = Math.floor(
        Math.log2(maxTextH - minTextH)
      ); // number of iteration to adjust text width

      ctx.fillStyle = bg;
      ctx.strokeStype = borderColor;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, angle);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.rotate(angle / 2);
      ctx.fillStyle = fg;

      let textH = Math.round((actualMaxTextH - minTextH) / 2);
      var step = textH / 2;
      if (actualMaxTextH > minTextH) {
        // if text's height fits in the sector
        for (let i = 0; i < textMeasureIterationNum; i++) {
          ctx.font = `${textH}px Verdana`;
          var textW = ctx.measureText(title).width;
          if (textW === desiredTextW) {
            break;
          } else if (textW < desiredTextW) {
            textH += step;
          } else {
            // textW > desiredTextW)
            textH -= step;
          }
          step /= 2;
        }
        textW = ctx.measureText(title).width;
        const actualApproximateTextH = ctx.measureText("M").width;
        ctx.fillText(title, r / 2 - textW / 2, actualApproximateTextH / 2);
      }
      ctx.rotate(angle / 2);
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = arrowColorLeft;
    ctx.strokeStyle = borderColor;
    ctx.beginPath();
    ctx.moveTo(width / 2 - arrowW, 0);
    ctx.lineTo(width / 2, arrowH / 3);
    ctx.lineTo(width / 2, arrowH);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = arrowColorRight;
    ctx.beginPath();
    ctx.moveTo(width / 2 + arrowW, 0);
    ctx.lineTo(width / 2, arrowH / 3);
    ctx.lineTo(width / 2, arrowH);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context, Math.PI);
    // eslint-disable-next-line
  }, [items]);

  return (
    <Segment raised>
      <Container text>
        <Header size="medium" textAlign="center" content="Drag the wheel!" />
        <canvas
          ref={canvasRef}
          onClick={onSpin}
          width={`${width}px`}
          height={`${height}px`}
        >
          {" "}
          Your browser does not seem to be supporting Canvas API
        </canvas>
      </Container>
      <Modal open={resultModalOpen} onClose={() => setResultModalOpen(false)}>
        <Modal.Header content="Result" />
        <Modal.Content>
          <Modal.Description>
            <Header
              size="huge"
              textAlign="center"
              content={`${result.title} (${toPercent(result.weight)}%)`}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Great!"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setResultModalOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </Segment>
  );
};

export { Wheel };
