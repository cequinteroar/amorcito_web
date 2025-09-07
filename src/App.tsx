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
        {hovered === null && (
          <p>
            Una historia de amor con muchos aventuras, mucha historia, mucho amor y mucha sazón. Una historia de amor
            entre los dos.
          </p>
        )}
        {/* LEFT HALF */}
        <svg
          className="heart heart-left"
          viewBox="0 0 24 24"
          onMouseEnter={() => setHovered(heart.left)}
          onMouseLeave={() => setHovered(null)}
        >
          <defs>
            <pattern id="left-img" patternUnits="objectBoundingBox" width={1} height={1}>
              <image
                href={require("./assets/Lau1.jpg")}
                x="0"
                y="0"
                width="12"
                height="24"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path
            d="M12 21s-7-4.35-10-9.55C.5 6.55 4.42 2 8.5 5.5L12 9z"
            fill={hovered === "left" ? "url(#left-img)" : "red"}
          />
        </svg>
        {/* RIGHT HALF */}
        <svg
          className="heart heart-right"
          viewBox="0 0 24 24"
          onMouseEnter={() => setHovered(heart.right)}
          onMouseLeave={() => setHovered(null)}
        >
          <defs>
            <pattern id="right-img" patternUnits="objectBoundingBox" width={1} height={1}>
              <image
                href={require("./assets/Cesar.jpg")}
                x="-1"
                y="0"
                width="12"
                height="24"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path
            d="M12 21s7-4.35 10-9.55C23.5 6.55 19.58 2 15.5 5.5L12 9z"
            fill={hovered === "right" ? "url(#right-img)" : "red"}
          />
        </svg>
        {/* TEXT OVERLAY */}
        {hovered === heart.left && <div className="text left">Escobarcita</div>}
        {hovered === heart.right && <div className="text right">Quinti</div>}
        {/* TEXT BESIDES */}
        {hovered === heart.left && <div className="text left">Escobarcita</div>}
        {hovered === heart.right && <div className="text right">Quinti</div>}
      </div>
      <p className="footnote">
        * Porque un amor como el nuestro merece estar en todo tipo de arte, incluso el digital.
      </p>
      <p className="footnote">P.S: I love you</p>
    </div>
  );
}

export default App;
