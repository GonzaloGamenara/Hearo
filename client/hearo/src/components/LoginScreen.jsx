import "../styles/LoginScreen.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginScreen() {
  const navigate = useNavigate();
  const [color, setColor] = useState("#FF4081");
  const [nick, setNick] = useState("");

  const colorOptions = [
    "#FF4081",
    "#00D1FF",
    "#FFD700",
    "#00FF6A",
    "#9B59B6",
    "#FF6F00",
    "#1ABC9C",
    "#E91E63",
    "#8BC34A",
    "#673AB7",
  ];

  return (
    <div className="login_primary_container">
      <h1 className="login_title">🎧 Hearo</h1>
      <div className="login_secondary_container">
        <p>Elije tu apodo</p>
        <input
          onChange={(e) => setNick(e.target.value)}
          type="text"
          placeholder="ingresa tu apodo"
          className="login_input"
          maxLength={16}
        />
        <p>Elije tu color</p>
        <div className="color-selector">
          {colorOptions.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setColor(c);
                console.log(`Color seleccionado: ${c}`);
              }}
              className={`color-option ${color === c ? "selected" : ""}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <button
          className="login_google_button"
          onClick={() => navigate("/home")}
        >
          Iniciar sesion con google
        </button>
        <p className="login_note">
          tu progreso y racha se guardaran automaticamente.
        </p>
      </div>
    </div>
  );
}
