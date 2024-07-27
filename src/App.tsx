import React from "react";
import ResponseForm from "./components/ResponseForm";
import ResponseList from "./components/ResponseList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Marriage Invitation</h1>
      <ResponseForm />
      <ResponseList />
    </div>
  );
};

export default App;
