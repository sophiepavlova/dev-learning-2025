import Button from "./Button";

export default function Keypad({ onButtonPress }) {
  return (
    <div className="keypad">
      {/* 1 ряд */}
      <Button type="light" onClick={() => onButtonPress("C")}>
        C
      </Button>
      <Button type="light" onClick={() => onButtonPress("+/-")}>
        +/-
      </Button>
      <Button type="light" onClick={() => onButtonPress("%")}>
        %
      </Button>
      <Button type="dark" onClick={() => onButtonPress("÷")}>
        ÷
      </Button>

      {/* 2 ряд */}
      <Button type="light" onClick={() => onButtonPress("7")}>
        7
      </Button>
      <Button type="light" onClick={() => onButtonPress("8")}>
        8
      </Button>
      <Button type="light" onClick={() => onButtonPress("9")}>
        9
      </Button>
      <Button type="dark" onClick={() => onButtonPress("×")}>
        ×
      </Button>

      {/* 3 ряд */}
      <Button type="light" onClick={() => onButtonPress("4")}>
        4
      </Button>
      <Button type="light" onClick={() => onButtonPress("5")}>
        5
      </Button>
      <Button type="light" onClick={() => onButtonPress("6")}>
        6
      </Button>
      <Button type="dark" onClick={() => onButtonPress("−")}>
        −
      </Button>

      {/* 4 ряд */}
      <Button type="light" onClick={() => onButtonPress("1")}>
        1
      </Button>
      <Button type="light" onClick={() => onButtonPress("2")}>
        2
      </Button>
      <Button type="light" onClick={() => onButtonPress("3")}>
        3
      </Button>
      <Button type="dark" onClick={() => onButtonPress("+")}>
        +
      </Button>

      {/* 5 ряд */}
      <Button type="light" onClick={() => onButtonPress(".")}>
        .
      </Button>
      <Button type="light" onClick={() => onButtonPress("0")}>
        0
      </Button>
      <Button type="light" onClick={() => onButtonPress("⌫")}>
        ⌫
      </Button>
      <Button type="accent" onClick={() => onButtonPress("=")}>
        =
      </Button>
    </div>
  );
}
