import { Segment, Header, Container, Modal, Button } from "semantic-ui-react";
import { useContext, useState, useRef, useEffect } from "react";
import { StoreContext } from "./store";
import { weightedRandom, toPercent } from "./utils";

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

  const draw = (ctx) => {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#dadada";
    ctx.beginPath();
    ctx.arc(375, 375, 375, 0, 2 * Math.PI);
    ctx.fill();
    return;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
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
