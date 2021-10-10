import { StoreContext } from "./store.js";
import { toPercent } from "./utils.js";
import { useContext } from "react";
import { Header, Container, Segment, Grid } from "semantic-ui-react";

const HistoryItem = ({ ts, title, weight }) => {
  const tsToString = (ts) => {
    const date = new Date(ts);
    return date.toLocaleString();
  };

  return (
    <Grid.Row columns={1}>
      <Grid.Column>
        {`${tsToString(ts)}: ${title} (${toPercent(weight)}%)`}
      </Grid.Column>
    </Grid.Row>
  );
};

const History = () => {
  const {
    history: [history],
  } = useContext(StoreContext);
  const elements = history.map(({ ts, title, weight }) => (
    <HistoryItem
      key={Math.floor(ts * Math.random())}
      ts={ts}
      title={title}
      weight={weight}
    />
  ));
  return (
    <Segment raised>
      <Container>
        <Header size="medium" textAlign="center" content="History of spins:" />
        {elements.length === 0 ? (
          <Header textAlign="center" size="tiny" content="Empty" />
        ) : (
          <Grid>{elements}</Grid>
        )}
      </Container>
    </Segment>
  );
};

export { History };
