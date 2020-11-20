import React from "react";
import "./css/main.css";
import InputData from "./components/InputData";
import OutputData from "./components/OutputData";
import blockImage from "./img/blockImage.png";

class App extends React.Component {
  inputDataFirst = [
    0.39,
    0.1,
    0.6,
    0.9,
    0.88,
    0.96,
    0.01,
    0.41,
    0.86,
    0.14,
    0.26,
    0.05,
    0.03,
    0.16,
    0.22,
    0.02,
    0.29,
    0.34,
    0.55,
    0.36,
  ];

  inputDataSecond = {
    poss: [0.21, 0.47, 0.81, 0.02, 0.25],
    cases: {
      first: [0],
      second: [0, 1],
    },
  };

  render() {
    return (
      <div className="app">
        <InputData
          inputDataFirst={this.inputDataFirst}
          inputDataSecond={this.inputDataSecond}
          blockImage={blockImage}
        />
        <OutputData
          inputDataFirst={this.inputDataFirst}
          inputDataSecond={this.inputDataSecond}
        />
      </div>
    );
  }
}

export default App;
