import { useState, useEffect } from "react";
import ThemeSelector from "./components/ThemeSelector";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

import "./styles/themes.css";
import "./styles/globals.css";
import "./styles/layout.css";

export default function App() {
  // текущая тема
  const [theme, setTheme] = useState("strawberry");

  // строка вычислений (верхняя)
  const [equation, setEquation] = useState("");

  // результат (нижняя строка)
  const [result, setResult] = useState("0");

  // переключение темы (добавляет класс на body)
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  // обработка нажатия кнопок
  function handleButtonPress(value) {
    if (!isNaN(value)) {
      // цифры
      if (result === "0") {
        setResult(value);
      } else {
        setResult(result + value);
      }
      return;
    }

    switch (value) {
      case "C":
        setResult("0");
        setEquation("");
        break;

      case ".":
        if (!result.includes(".")) {
          setResult(result + ".");
        }
        break;

      case "⌫":
        if (result.length > 1) {
          setResult(result.slice(0, -1));
        } else {
          setResult("0");
        }
        break;

      case "+/-":
        if (result !== "0") {
          setResult(result.startsWith("-") ? result.slice(1) : "-" + result);
        }
        break;

      case "%":
        setResult(String(parseFloat(result) / 100));
        break;

      case "+":
      case "−":
      case "×":
      case "÷":
        setEquation(result + " " + value);
        setResult("0");
        break;

      case "=":
        calculateAnswer();
        break;

      default:
        break;
    }
  }

  // вычисления
  function calculateAnswer() {
    if (!equation) return;

    let [first, operator] = equation.split(" ");
    const second = result;

    const a = parseFloat(first);
    const b = parseFloat(second);
    let answer = 0;

    switch (operator) {
      case "+":
        answer = a + b;
        break;
      case "−":
        answer = a - b;
        break;
      case "×":
        answer = a * b;
        break;
      case "÷":
        answer = b === 0 ? "Error" : a / b;
        break;
    }

    setEquation(equation + " " + second);
    setResult(String(answer));
  }

  return (
    <div className="app-container">
      <ThemeSelector currentTheme={theme} onChangeTheme={setTheme} />
      <Display equation={equation} result={result} />
      <Keypad onButtonPress={handleButtonPress} />
    </div>
  );
}
