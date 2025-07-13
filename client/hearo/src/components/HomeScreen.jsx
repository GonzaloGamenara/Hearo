import { useNavigate } from "react-router-dom";
import "../styles/HomeScreen.css";

export function HomeScreen() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("hearo_user"));

  return (
    <div className="home_container">
        <h1 className="home_title">🎧 Hearo</h1>
      <h2 className="home_subtitle">¡Bienvenido {user?.nick || "jugador"}!</h2>

      <div className="user_color" style={{ backgroundColor: user?.color }} />

      <div className="home_button_panel">
        <button onClick={() => navigate("/solo")}>🎧 Jugar en solitario</button>
        <button onClick={() => navigate("/multiplayer")}>🧑‍🤝‍🧑 Jugar con amigos</button>
        <button onClick={() => navigate("/daily")}>🎯 Canción del día</button>
        <button onClick={() => navigate("/leaderboard")}>🏆 Leaderboard</button>
      </div>

      <p className="home_footer_note">Tu progreso se guardará automáticamente.</p>
    </div>
  );
}
