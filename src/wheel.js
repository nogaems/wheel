import { useContext, useEffect, useRef, useState } from "react";
import { Button, Header, Modal, Segment, Rail } from "semantic-ui-react";

import { isFulfilled } from "./items";
import { StoreContext } from "./store";
import { getRandomInt, toPercent, weightedRandom } from "./utils";

const Wheel = () => {
  const {
    items: [items],
    history: [history, setHistory],
    unassignedProbability,
  } = useContext(StoreContext);

  const width = Math.floor(window.innerWidth * 0.5);
  const height = width;

  // const [width, height] = [850, 850];

  const [result, setResult] = useState({ title: null, weight: null });
  const [resultModalOpen, setResultModalOpen] = useState(false);

  const [offset, setOffset] = useState(Math.PI);
  const [isSpinning, setIsSpinning] = useState(false);

  const canvasRef = useRef(null);

  const onSpin = () => {
    if (isSpinning) return;
    if (!isFulfilled(unassignedProbability)) {
      // TODO: this must appear beneath the list to the right as a warning
      alert(
        `You have to fully assign the remaining probability of ${toPercent(
          unassignedProbability
        )} before spinning!`
      );
      return;
    }
    const { title, weight, index } = weightedRandom(items);
    setResult({ title, weight });
    spin(index);
  };

  const spin = (targ_sector) => {
    // Building somewhat realistic model of the process of spinning wheel is rather complicated
    // and is not the aim of this project by any means.
    // To make things look realistic at some level, I use a simplified approach to this
    // problem by reducing the wheel spinning process to the case of motion with constant
    // acceleration and utilize a modified version of Torricelli's equation for that.

    // we need this because of floating point calculations
    const eps = 0.001;
    // the position (in radians) where we start to spin
    const S0 = offset;
    // the interval (in ms) of applying force, basically for how long the wheel accelerates
    const t1 = getRandomInt(200, 700);
    // friction force coefficient, don't really try to make much sense of it,
    // it just defines how long it's gonna take the wheel to stop
    const f = 6e-7;

    const targ_angle =
      Math.PI *
      (1 -
        2 *
          (items
            .slice(0, targ_sector)
            .map(({ weight }) => weight)
            .reduce((prev, next) => prev + next, 0) +
            items[targ_sector].weight * Math.random()));

    // here we randomly add 8-15 more full spins so it looks more realistic
    const S_targ = getRandomInt(8, 16) * (Math.PI * 2) + targ_angle;
    const F =
      ((1 / 2) *
        (Math.sqrt(f * f * (t1 * t1) + 8 * (S_targ - S0) * f) - f * t1)) /
      t1;

    const calcAngle = (t) => {
      if (t < t1) {
        return (F * t * t) / 2 + S0;
      } else {
        const S_peak = (F * t1 * t1) / 2 + S0;
        const v_peak = F * t1;
        const t_end = t1 + v_peak / f;
        if (t > t_end) return S_targ;
        return (-f * (t - t1) * (t - t1)) / 2 + v_peak * (t - t1) + S_peak;
      }
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const start = performance.now();
    setIsSpinning(true);

    window.requestAnimationFrame(function animate(time) {
      const t = time - start;
      const angle = calcAngle(t);
      draw(context, angle);
      if (Math.abs(S_targ - angle) > eps) {
        window.requestAnimationFrame(animate);
      } else {
        // the spinning is over
        setOffset(targ_angle);
        setResultModalOpen(true);
        setIsSpinning(false);
        const { title, weight } = items[targ_sector];
        const histItem = { ts: Date.parse(Date()), title, weight };
        setHistory([histItem, ...history]);
      }
    });
  };

  const draw = (ctx, initialAngle = 0) => {
    const offset = width / 60;
    const border = 5;
    const borderColor = "#000000";
    const backgroundColor = "#d2f1d9";
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

    // reset identity matrix and clean up everything
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.translate(cx, cy);
    ctx.rotate(initialAngle + Math.PI / 2);

    // border
    ctx.fillStyle = borderColor;
    ctx.beginPath();
    ctx.arc(0, 0, r + border, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    // background
    ctx.fillStyle = backgroundColor;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI);
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
        //&gordon | user: знаешь что самое прекрасное в этом всем?
        //&gordon | никто никогда не узнает что эту строчку написал я
        //&gordon | и я буду всё отрицать
        //&gordon | если меня кто-то будет спрашивать
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

    draw(context, offset);
    // eslint-disable-next-line
  }, [items]);

  return (
    <Segment raised>
      <Rail attached internal position="left" close="very">
        <Segment compact>
          <Header as="h3" textAlign="center" content="Drag the wheel!" />
        </Segment>
      </Rail>
      <canvas
        ref={canvasRef}
        onClick={onSpin}
        width={`${width}px`}
        height={`${height}px`}
      >
        {" "}
        Your browser does not seem to be supporting Canvas API
      </canvas>
      <Modal open={resultModalOpen} onClose={() => setResultModalOpen(false)}>
        <Modal.Header content="Result" />
        <Modal.Content>
          <Modal.Description>
            <Header
              size="huge"
              textAlign="center"
              content={`${result.title} (${toPercent(result.weight)})`}
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
