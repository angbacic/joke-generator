import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import JokeContainer from "./components/JokeContainer";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" component={JokeContainer} />
      </main>
    </div>
  );
}

export default App;
