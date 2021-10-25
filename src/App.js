import "./App.css";

import "fomantic-ui-css/semantic.css";
import { Container, Divider, Grid, Header } from "semantic-ui-react";

import { ItemList } from "./items";
import { History } from "./history";
import { Wheel } from "./wheel";

const App = () => {
  return (
    <Container fluid className="main-container">
      <Header size="huge" textAlign="center">
        <Header.Content>Wheel of Unfortunate</Header.Content>
      </Header>
      <Grid columns={2}>
        <Grid.Column width={10} textAlign="center">
          <Wheel />
        </Grid.Column>
        <Grid.Column width={6}>
          <ItemList />
        </Grid.Column>
      </Grid>
      <Divider horizontal />
      <Container>
        <History />
      </Container>
    </Container>
  );
};

export default App;
