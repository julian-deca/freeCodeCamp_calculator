function App() {
  const [expression, setExpression] = React.useState("0");
  const [answer, setAnswer] = React.useState("");

  React.useEffect(() => {
    function replaceZero() {
      let noZero = expression;
      if (noZero.length > 1) {
        noZero = noZero.replace(/^0/, "");
        noZero = noZero.replace(/([\d]+)(\.+)([\d]+)(\.+)/g, "$1$2$3");
        noZero = noZero.replace(/\.+/g, ".");
        setExpression(noZero);
      }
    }
    replaceZero();
  });
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };
  const display = () => {
    let symbol = event.target.textContent;
    if (symbol == "x") {
      symbol = "*";
    }
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if (/[0-9\.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };
  const clearAll = () => {
    setExpression("0");
    setAnswer("");
  };
  const deleteOne = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };

  return (
    <div className="container text-center pt-5">
      <h1>Calculator</h1>
      <div className="container pt-2" id="calculator">
        <div className="grid">
          <div className="display">
            <input type="text" value={expression} disabled id="display" />
            <div className="total">{answer}</div>
          </div>
          <div onClick={clearAll} className="padButton" id="clear">
            AC
          </div>
          <div onClick={deleteOne} className="padButton" id="clearOne">
            <i className="fa fa-delete-left "></i>
          </div>
          <div onClick={display} className="padButton" id="divide">
            /
          </div>
          <div onClick={display} className="padButton" id="multiply">
            x
          </div>
          <div onClick={display} className="padButton" id="seven">
            7
          </div>
          <div onClick={display} className="padButton" id="eight">
            8
          </div>
          <div onClick={display} className="padButton" id="nine">
            9
          </div>
          <div onClick={display} className="padButton" id="subtract">
            -
          </div>
          <div onClick={display} className="padButton" id="four">
            4
          </div>
          <div onClick={display} className="padButton" id="five">
            5
          </div>
          <div onClick={display} className="padButton" id="six">
            6
          </div>
          <div onClick={display} className="padButton" id="add">
            +
          </div>
          <div onClick={display} className="padButton" id="one">
            1
          </div>
          <div onClick={display} className="padButton" id="two">
            2
          </div>
          <div onClick={display} className="padButton" id="three">
            3
          </div>
          <div onClick={calculate} className="padButton" id="equals">
            =
          </div>
          <div onClick={display} className="padButton" id="zero">
            0
          </div>
          <div onClick={display} className="padButton" id="decimal">
            .
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
