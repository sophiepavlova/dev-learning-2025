import Button from "./Button";

export default function Keypad({ onButtonPress, currentTheme }) {
  const layout = [
    ["C", "+/-", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "−"],
    ["1", "2", "3", "+"],
    [".", "0", "⌫", "="],
  ];

  function getType(row, col, theme) {
    const isKitten = currentTheme === "kitten";
    const isTopRow = row === 0;
    const isLastCol = col === 3;

    // Operators → always dark
    if (isLastCol) return "dark";

    // Top row → light (kitten overrides via variables)
    if (isTopRow) return "light";

    // Numbers in kitten → accent (yellow)
    if (isKitten) return "accent";

    // Numbers in other themes → white
    return "white";
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
