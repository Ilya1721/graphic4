import React from "react";

class InputData extends React.Component {
  inputDataFirst = this.props.inputDataFirst;
  inputDataSecond = this.props.inputDataSecond;
  blockImage = this.props.blockImage;
  data = {
    first: this.inputDataFirst.slice(0, this.inputDataFirst.length / 2),
    second: this.inputDataFirst.slice(
      this.inputDataFirst.length / 2,
      this.inputDataFirst.length
    ),
  };

  render() {
    return (
      <div className="input-data">
        <h3>Початкові дані до задачі №1</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={10}>Ймовірності безвідмовної роботи елементів</th>
            </tr>
            <tr>
              <th>1-го</th>
              <th>2-го</th>
              <th>3-го</th>
              <th>4-го</th>
              <th>5-го</th>
              <th>6-го</th>
              <th>7-го</th>
              <th>8-го</th>
              <th>9-го</th>
              <th>10-го</th>
            </tr>
            <tr>
              <th>11-го</th>
              <th>12-го</th>
              <th>13-го</th>
              <th>14-го</th>
              <th>15-го</th>
              <th>16-го</th>
              <th>17-го</th>
              <th>18-го</th>
              <th>19-го</th>
              <th>20-го</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.data.first.map((item) => (
                <td key={item}>{item}</td>
              ))}
            </tr>
            <tr>
              {this.data.second.map((item) => (
                <td key={item}>{item}</td>
              ))}
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до задачі № 2</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={5}>Ймовірності безвідмовної роботи елементів</th>
              <th colSpan={2}>Елементи, які відмовили</th>
            </tr>
            <tr>
              <th>1-го</th>
              <th>2-го</th>
              <th>3-го</th>
              <th>4-го</th>
              <th>5-го</th>
              <th>1 вип.</th>
              <th>2 вип.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.inputDataSecond.poss.map((p) => (
                <td key={p}>{p}</td>
              ))}
              <td>
                {this.inputDataSecond.cases.first.map((c) => (
                  <span key={c}>{c + 1}, </span>
                ))}
              </td>
              <td>
                {this.inputDataSecond.cases.second.map((c) => (
                  <span key={c}>{c + 1}, </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Блок-схема</h3>
        <img src={this.blockImage} className="img" alt="block scheme image" />
      </div>
    );
  }
}

export default InputData;
