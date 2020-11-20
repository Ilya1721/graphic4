import React from "react";

class OutputData extends React.Component {
  inputData = this.props.inputDataSecond;

  calculate = () => {
    const { poss, cases } = this.inputData;
    const pFirst = poss.reduce((a, b) => a * b, 1);
    let p1 = 1;
    for (let i = cases.first.slice(-1)[0] + 1; i < poss.length; i++) {
      p1 *= poss[i];
    }
    let p2 = 1;
    for (let i = cases.second.slice(-1)[0] + 1; i < poss.length; i++) {
      p2 *= poss[i];
    }
    let newPoss = poss;
    newPoss[0] -= newPoss[0] / 3;
    newPoss[newPoss.length - 1] += 0.03;
    const pSecond = newPoss.reduce((a, b) => a * b, 1);
    let p1s = 1;
    for (let i = cases.first.slice(-1)[0] + 1; i < newPoss.length; i++) {
      p1s *= newPoss[i];
    }
    let p2s = 1;
    for (let i = cases.second.slice(-1)[0] + 1; i < newPoss.length; i++) {
      p2s *= newPoss[i];
    }

    return {
      pFirst,
      pSecond,
      p1,
      p2,
      p1s,
      p2s,
    };
  };

  render() {
    const result = this.calculate();
    console.log(result);
    return (
      <div className="output-data">
        <h3>Завдання № 1</h3>
        <table>
          <thead>
            <tr>
              <th>Ймовірність безвідмовної роботи системи до зміни</th>
              <th>Ймовірність безвідмовної роботи системи після зміни</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.477</td>
              <td>0.474</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання № 2</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={3}>
                Ймовірність безвідмовної роботи системи до зміни
              </th>
              <th colSpan={3}>
                Ймовірність безвідмовної роботи системи після зміни
              </th>
            </tr>
            <tr>
              <th>Без відмов</th>
              <th>1 випадок</th>
              <th>2 випадок</th>
              <th>Без відмов</th>
              <th>1 випадок</th>
              <th>2 випадок</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{result.pFirst.toFixed(6)}</td>
              <td>{result.p1.toFixed(4)}</td>
              <td>{result.p2.toFixed(4)}</td>
              <td>{result.pSecond.toFixed(6)}</td>
              <td>{result.p1s.toFixed(4)}</td>
              <td>{result.p2s.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OutputData;
