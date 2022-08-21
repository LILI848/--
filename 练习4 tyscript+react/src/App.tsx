import React, { useState } from "react";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
export default function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "abc",
      url: "",
      age: 25,
      note: "abcdxse",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}
