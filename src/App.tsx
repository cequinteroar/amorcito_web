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
          <p className="heart-text">
            Una historia de amor con muchos aventuras, mucha historia, mucho amor y mucha sazón. Una historia de amor
            entre los dos.
          </p>
        )}
        {/* LEFT HALF */}
        <svg
          className="heart heart-left"
          viewBox="0 0 24 24"
          onTouchStart={() => setHovered(heart.left)}
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
            d="M12 21 C 6 17, 0 12, 5 6.5 C 8 3, 12 5.5, 12 9Z"
            fill={hovered === "left" ? "url(#left-img)" : "#D9595F"}
          />
        </svg>
        {/* RIGHT HALF */}
        <svg
          className="heart heart-right"
          viewBox="0 0 24 24"
          onTouchStart={() => setHovered(heart.right)}
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
            d="M12 21 C 18 17, 23 12, 19 7 C 16 3, 12 5.5, 12 9Z"
            fill={hovered === "right" ? "url(#right-img)" : "#D9595F"}
          />
        </svg>
        {/* TEXT OVERLAY */}
        {hovered === heart.left && <div className="text left">Escobarcita</div>}
        {hovered === heart.right && <div className="text right">Quinti</div>}
        {/* TEXT BESIDES */}
        {hovered === heart.left && (
          <div className="poem left">
            <p>
              Que nuestro amor crezca más, vida mía, que nuestras aventuras sean más y nos unan más, que nuestro amor
              sea tan fuerte que pueda convertir demonios en humanos, crear recetas increíbles, resolver misterios,
              trascender fronteras y sea cada vez más lindo. Gracias mi vida por este tiempo juntos, por tu amor, por
              ser mi compañera de vida, mi cómplice, mi amante, mi amiga, mi equipo, mi novia linda.
            </p>
          </div>
        )}
        {hovered === heart.right && (
          <div className="poem right">
            <p>
              Nadie creería que 1 + 1 = 3, hasta que ocurrió la matemática más linda que nunca imaginé, tú + yo = 3 años
              juntos. Y ya sabes lo que dicen, la matemática no falla, pero la realidad si, pues al estar contigo el
              tiempo no corre igual, la alegría es más fuerte, la gravedad es más liviana, la vida se torna más
              tranquika, más bella, los problemas se ven diminutos y el amor gigantezco.
            </p>
          </div>
        )}
      </div>
      <div>
        <p className="footnote">
          * Porque un amor como el nuestro merece estar en todo tipo de arte, incluso el digital.
        </p>
        <p className="footnote">P.S: I love you</p>
      </div>
    </div>
  );
}

export default App;
