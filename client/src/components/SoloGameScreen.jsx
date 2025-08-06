import { useState } from "react";
import "../styles/SoloGameScreen.css";
import { Navigate, useNavigate } from "react-router-dom";

export function SoloGameScreen() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(1);
  const [guess, setGuess] = useState("");

  const handleMoreTime = () => {
    if (seconds < 10) setSeconds(seconds + 1);
  };

  const handleSubmit = () => {
    console.log(`Respuesta: ${guess}`);
  };

  return (
    <div className="solo_container">
      <h1 className="solo_title">🎧 Modo Solitario</h1>

      <audio src="/song-preview.mp3" controls autoPlay />

      <button onClick={handleMoreTime} className="time_button">
        +1 segundo
      </button>

      <p className="solo_info">
        Duración actual: {seconds} segundo{seconds > 1 ? "s" : ""}
      </p>

      <div className="guess_section">
        <input
          type="text"
          placeholder="¿Qué canción es?"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="guess_input"
          id="guess"
        />
        <button className="submit_button" onClick={handleSubmit}>
          ✔︎
        </button>
      </div>
      <button onClick={() => navigate("/home")}>Volver al menu</button>
    </div>
  );
}
