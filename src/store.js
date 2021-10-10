import { createContext, useEffect, useState } from "react";
import { calcUnassignedProbability } from "./utils";

export const StoreContext = createContext(null);

export default function StoreProvider({ children }) {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const [unassignedProbability, setUnassignedProbability] = useState(
    calcUnassignedProbability(items)
  );

  const store = {
    items: [items, setItems],
    history: [history, setHistory],
    unassignedProbability,
  };

  useEffect(() => {
    const newUnassignedProbability = calcUnassignedProbability(items);
    setUnassignedProbability(newUnassignedProbability);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
