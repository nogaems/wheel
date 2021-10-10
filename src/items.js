import { debounce } from "lodash";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Label,
  Message,
  Segment,
  Confirm,
  Dropdown,
  Modal,
  Icon,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";

import { StoreContext } from "./store";
import { assignColors, toPercent, isAlreadyAdded } from "./utils";

const minProb = 0.0001;
const probStep = 0.0001;
const epsilon = 0.0001;

const isFulfilled = (unassignedProbability) => {
  return Math.abs(unassignedProbability) < epsilon;
};

const Item = ({ index, title, fg, bg, weight }) => {
  const {
    items: [items, setItems],
    unassignedProbability,
  } = useContext(StoreContext);

  const [deleteConfirmOpened, setDeleteConfirmOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);

  const maxWeight = weight + unassignedProbability;

  const [newTitle, setNewTitle] = useState(title);
  const [newWeight, setNewWeight] = useState(weight);
  const [newColors, setNewColors] = useState([null, null]);

  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const onEdit = () => {
    setSaving(true);
    assignColors(newTitle, setNewColors);
  };

  useEffect(() => {
    if (title !== newTitle && isAlreadyAdded(newTitle, items)) {
      setSaving(false);
      setError("It's already on the list");
      return;
    }
    const newItems = [...items];
    const item = newItems[index];
    item.title = newTitle;
    item.weight = newWeight;
    [item.fb, item.bg] = newColors;
    setItems(newItems);
    setSaving(false);
    setEditOpened(false);
    // eslint-disable-next-line
  }, [newColors]);

  const onDelete = () => {
    const newItems = items;
    newItems.splice(index, 1);
    setItems([...newItems]);
    setDeleteConfirmOpened(false);
  };

  return (
    <>
      <Grid.Row>
        <Grid.Column width={14}>
          <Label
            style={{ color: fg, backgroundColor: bg, alignSelf: "flex-start" }}
            size="large"
          >
            {`${index + 1}) ${title} (${toPercent(weight)}%)`}
          </Label>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button.Group compact floated="right">
            <Button
              size="mini"
              icon="edit outline"
              onClick={() => setEditOpened(true)}
            />
            <Button
              size="mini"
              color="red"
              icon="delete"
              onClick={() => setDeleteConfirmOpened(true)}
            />
            <Confirm
              open={deleteConfirmOpened}
              onConfirm={onDelete}
              onCancel={() => setDeleteConfirmOpened(false)}
            />
            <Modal onClose={() => setEditOpened(false)} open={editOpened}>
              <Modal.Header>Edit</Modal.Header>
              <Modal.Content>
                <Form error>
                  <Form.Group inline>
                    <Form.Field
                      type="text"
                      control="input"
                      defaultValue={title}
                      label="Title"
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <Form.Field
                      type="range"
                      control="input"
                      label="Probability"
                      min={minProb}
                      max={maxWeight}
                      step={probStep}
                      defaultValue={weight}
                      onChange={(e) =>
                        setNewWeight(Number.parseFloat(e.target.value))
                      }
                    />
                    {toPercent(newWeight)}%
                  </Form.Group>
                  {error && <Message error content={error} />}
                </Form>
                <Dimmer active={saving}>
                  <Loader content="Saving" />
                </Dimmer>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setEditOpened(false)}>
                  Cancel
                </Button>
                <Button
                  content="Save"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => onEdit()}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
      <Divider fitted />
    </>
  );
};

const ItemAddForm = () => {
  const {
    items: [items, setItems],
    unassignedProbability,
  } = useContext(StoreContext);

  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState(minProb);
  const [colors, setColors] = useState([null, null]);
  const [addEnabled, setAddEnabled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const weightFloat = Number.parseFloat(weight);
    if (!(title && weightFloat)) {
      setAddEnabled(false);
      return;
    }
    if (isFulfilled(unassignedProbability)) {
      setError("The total probability of specified events has reached 100%");
      setAddEnabled(false);
      return;
    }
    const [fg, bg] = colors;
    if (!(fg && bg)) return;
    // eslint-disable-next-line
  }, [title, weight, colors]);

  // eslint-disable-next-line
  const debouncedSetColors = useCallback(
    debounce((title) => {
      if (isAlreadyAdded(title, items)) {
        setError("It's already on the list");
        return;
      }
      assignColors(title, setColors);
      setAddEnabled(true);
    }, 300),
    [items]
  );

  const onTitleChange = (e) => {
    setAddEnabled(false);
    const value = e.target.value;
    setTitle(value);
    if (!value) {
      setError("Title must be non-empty");
      return;
    } else {
      setError("");
    }
    debouncedSetColors(value);
  };

  const onAdd = () => {
    const [fg, bg] = colors;
    const item = { title, weight, fg, bg };
    setItems([...items, item]);
    setTitle("");
    setWeight(minProb);
    setAddEnabled(false);
    setError(null);
  };

  return (
    <Form onSubmit={onAdd} error>
      <Form.Group grouped>
        <Form.Input
          type="text"
          label="Title"
          placeholder="thing to do"
          value={title}
          onChange={onTitleChange}
        />
        <Form.Field
          type="range"
          control="input"
          min={minProb}
          max={unassignedProbability}
          step={probStep}
          label="Probability"
          value={weight}
          onChange={(e) => setWeight(Number.parseFloat(e.target.value))}
        />
        {`${toPercent(weight)}%`}
        <Form.Button
          positive
          size="large"
          disabled={!addEnabled}
          icon="add"
        />{" "}
      </Form.Group>
      {error && <Message error content={error} />}
    </Form>
  );
};

const ItemList = () => {
  const {
    items: [items, setItems],
    history: [history, setHistory],
  } = useContext(StoreContext);

  const [eraseConfirmOpened, setEraseConfirmOpened] = useState(false);
  const [filePickerOpened, setFilePickerOpened] = useState(false);
  const [filePickerError, setFilePickerError] = useState("");
  const [fileToImport, setFileToImport] = useState(null);

  const onImport = () => {
    if (!fileToImport) {
      setFilePickerError("You should pick a file");
      return;
    }
    fetch(fileToImport)
      .then((res) => res.json())
      .then(({ items, history }) => {
        setItems(items);
        setHistory(history);
        setFilePickerOpened(false);
      })
      .catch(() => {
        setFilePickerError(
          "Failed to fetch specified URL or parse its contents as JSON"
        );
      });
  };

  const onExport = () => {
    const data = { items, history };
    const serialized = JSON.stringify(data);
    const file = new Blob([serialized], { type: "application/json" });
    let a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = "wheel.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  };

  const onErase = () => {
    setEraseConfirmOpened(false);
    setItems([]);
    setHistory([]);
  };

  const elements = items.map(({ title, fg, bg, weight }, index) => (
    <Item
      key={index}
      index={index}
      title={title}
      fg={fg}
      bg={bg}
      weight={weight}
    />
  ));

  return (
    <Segment raised>
      <Grid>
        <Grid.Column width={14}>
          <Header
            size="medium"
            content="The things that are about to happen:"
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Dropdown
            button
            icon="wrench"
            className="icon"
            fluid
            style={{ textAlign: "center" }}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                icon="download"
                text="Import"
                onClick={() => setFilePickerOpened(true)}
              />
              <Dropdown.Item icon="upload" text="Export" onClick={onExport} />
              <Dropdown.Item
                icon="eraser"
                text="Erase"
                onClick={() => setEraseConfirmOpened(true)}
                as={Button}
                fluid
                attached="bottom"
                color="red"
              />
              <Confirm
                open={eraseConfirmOpened}
                onCancel={() => setEraseConfirmOpened(false)}
                onConfirm={onErase}
              ></Confirm>
              <Modal
                open={filePickerOpened}
                onClose={() => setFilePickerOpened(false)}
                onOpen={() => setFilePickerOpened(true)}
              >
                <Header icon>
                  <Icon name="download" />
                  Pick a file
                </Header>
                <Modal.Content>
                  <Container textAlign="center">
                    <Modal.Description>
                      <p>
                        Due to the restrictions caused by security reasons you
                        cannot use local files directly and you have to upload
                        it somewhere first.
                      </p>
                      <p>
                        Note that there is no input file validation performed,
                        so modifying it would be on your own risk.
                      </p>
                    </Modal.Description>
                    <Divider />
                    <Form error onSubmit={() => onImport()}>
                      <Form.Input
                        type="text"
                        label="Link:"
                        placeholder="https://example.com/wheel.json"
                        value={fileToImport}
                        onChange={(e) => setFileToImport(e.target.value)}
                      />
                      {filePickerError && (
                        <Message error content={filePickerError} />
                      )}
                    </Form>
                  </Container>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color="red"
                    inverted
                    onClick={() => setFilePickerOpened(false)}
                  >
                    <Icon name="remove" /> Cancel
                  </Button>
                  <Button color="green" inverted onClick={() => onImport()}>
                    <Icon name="checkmark" /> OK
                  </Button>
                </Modal.Actions>
              </Modal>
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
      </Grid>
      <Divider section />
      {elements.length === 0 ? (
        <Header
          textAlign="center"
          size="tiny"
          content="Nothing's on the list yet"
        />
      ) : (
        <Grid>{elements}</Grid>
      )}
      <ItemAddForm />
    </Segment>
  );
};
export { ItemList };
