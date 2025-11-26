import { useState } from "react";

const themes = [
  { id: "strawberry", label: "Strawberry milk", icon: "🍓" },
  { id: "lavender", label: "Lavender dreams", icon: "💜" },
  { id: "matcha", label: "Matcha latte", icon: "🍵" },
  { id: "kitten", label: "Hello kitten", icon: "🎀" },
  { id: "clouds", label: "Soft clouds", icon: "☁️" },
  { id: "peachy", label: "Peachy keen", icon: "🍑" },
];

export default function ThemeSelector({ currentTheme, onChangeTheme }) {
  const [open, setOpen] = useState(false);

  const selectedTheme = themes.find((t) => t.id === currentTheme);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function handleSelect(id) {
    onChangeTheme(id);
    setOpen(false);
  }
  return (
    <div className="theme-selector-container">
      {" "}
      <div className="theme-selector">
        {" "}
        <div className="theme-icon-left">
          <span className="icon">{selectedTheme.icon}</span>
        </div>
        <div
          className="theme-chevron"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu(); // ← Только ПРАВАЯ кнопка открывает меню
          }}
        >
          <svg
            width="16"
            height="6"
            viewBox="0 0 16 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L8 5L15 1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {open && (
        <div className="selector-menu">
          {" "}
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={
                "selector-item" + (theme.id === currentTheme ? " selected" : "")
              }
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(theme.id);
              }}
            >
              <span>{theme.icon}</span>
              <span>{theme.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
