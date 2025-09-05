import React from "react";
import logo from "./logo.svg";
import "./App.css";

enum heart {
  left = "left",
  right = "right",
}

function App() {
  const [hovered, setHovered] = React.useState<heart | null>(null); // "left" | "right" | null

  return (
    <div className="container">
      <h1>Felíz Tercer Aniversario Novia Linda</h1>
      <div className="heart-wrapper">
        {/* LEFT HALF */}
        <svg
          className="heart left"
          viewBox="0 0 24 24"
          onMouseEnter={() => setHovered(heart.left)}
          onMouseLeave={() => setHovered(null)}
        >
          <path
            d="M12 21s-7-4.35-10-9.55C.5 6.55 4.42 2 8.5 5.5L12 9l3.5-3.5C19.58 2 23.5 6.55 22 11.45 19 16.65 12 21 12 21z"
            fill={hovered === "left" ? "red" : "#ddd"}
          />
        </svg>

        {/* RIGHT HALF */}
        <svg
          className="heart right"
          viewBox="0 0 24 24"
          onMouseEnter={() => setHovered(heart.right)}
          onMouseLeave={() => setHovered(null)}
        >
          <path
            d="M12 21s-7-4.35-10-9.55C.5 6.55 4.42 2 8.5 5.5L12 9l3.5-3.5C19.58 2 23.5 6.55 22 11.45 19 16.65 12 21 12 21z"
            fill={hovered === "right" ? "red" : "#ddd"}
          />
        </svg>

        {/* TEXT OVERLAY */}
        {hovered === "left" && <div className="text left">Left ❤️</div>}
        {hovered === "right" && <div className="text right">Right ❤️</div>}
      </div>
    </div>
  );
}

export default App;
