import React from "react";
import "./App.scss";

//Compenents
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import ListTodo from "./Components/ListTodo";
import DoneTodo from "./Components/DoneTodo";

//Context
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <AddTodo />
        <ListTodo />
        <DoneTodo />
      </div>
    </GlobalProvider>
  );
}

export default App;
