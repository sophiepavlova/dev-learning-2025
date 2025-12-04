import Button from "./Button";

export default function Keypad({ onButtonPress, currentTheme }) {
  const isKitten = currentTheme === "kitten";

  const layout = [
    ["C", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    [".", "0", "⌫", "="],
  ];

  function getType(row, col, value) {
    const isTopRow = row === 0;
    const isLastCol = col === 3;

    // 🎀 HELLO KITTEN THEME
    if (isKitten) {
      if (isTopRow && !isLastCol) {
        return "kitten-dark"; // C, +/-, %
      }
      if (isLastCol) {
        return "kitten-red"; // ÷ × − + =
      }
      return "kitten-yellow"; // numbers, ., 0, ⌫
    }

    // 🌤 OTHER THEMES
    if (isLastCol) return "dark"; // operators
    if (isTopRow) return "light"; // C, +/-, %
    if (value === "=") return "accent";
    return "white"; // numbers
  }

  return (
    <div className="keypad">
      {layout.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Button
            key={value + rowIndex}
            type={getType(rowIndex, colIndex, value)}
            onClick={() => onButtonPress(value)}
          >
            {value}
          </Button>
        ))
      )}
    </div>
  );
}
