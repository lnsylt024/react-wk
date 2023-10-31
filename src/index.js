import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Study from "./study/Study";
import Game from "./example/Game";
import ExampleGame from "./example/ExampleGame";
import ExampleLayout from "./layout/ExampleLayout";
import ExampleTSX from "./tsx/ExampleTSX";
import ExampleCalculator from "./tsx/ExampleCalculator";
import ExampleTheme from "./tsx/ExampleTheme";
import ExampleKind from "./tsx/ExampleKind";
import ExampleCallback from "./tsx/ExampleCallback";

//方案1
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//方案2
ReactDOM.createRoot(document.getElementById("study")).render(<Study />);

//
ReactDOM.createRoot(document.getElementById("game")).render(<Game />);

//
ReactDOM.createRoot(document.getElementById("examplegame")).render(
  <ExampleGame />,
);

//
ReactDOM.createRoot(document.getElementById("examplelayout")).render(
  <ExampleLayout />,
);

ReactDOM.createRoot(document.getElementById("exampletsx")).render(
  <ExampleTSX />,
);

ReactDOM.createRoot(document.getElementById("examplecalculator")).render(
    <ExampleCalculator />,
);

ReactDOM.createRoot(document.getElementById("exampletheme")).render(
    <ExampleTheme />,
);

ReactDOM.createRoot(document.getElementById("examplekind")).render(
    <ExampleKind />,
);

ReactDOM.createRoot(document.getElementById("examplecallback")).render(
    <ExampleCallback />,
);