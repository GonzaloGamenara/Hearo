import "../styles/LoginScreen.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginScreen() {
  const navigate = useNavigate();
  const [color, setColor] = useState("#FF4081");
  const [openRegister, setOpenRegister] = useState(false);
  const [openColors, setOpenColors] = useState(false);

  const colorOptions = [
    "#FF4081", // Rosa fuerte
    "#00D1FF", // Celeste vibrante
    "#FFD700", // Dorado
    "#00FF6A", // Verde lima
    "#9B59B6", // Violeta
    "#FF6F00", // Naranja quemado
    "#1ABC9C", // Turquesa
    "#E91E63", // Rosa medio
    "#8BC34A", // Verde pasto
    "#673AB7", // Púrpura oscuro
    "#F44336", // Rojo fuerte
    "#3F51B5", // Azul índigo
    "#009688", // Verde azulado
    "#FFC107", // Amarillo cálido
    "#795548", // Marrón
    "#607D8B", // Gris azulado
    "#4CAF50", // Verde hoja
    "#2196F3", // Azul clásico
    "#FF9800", // Naranja intenso
    "#B0BEC5", // Gris claro
    "#FF1493",
  ];

  return (
    <div className="contenedor_general_login">
      <h1>🔊Hearo</h1>
      <div className="contenedor_login">
        <h2>Bienvenidx a Hearo!</h2>
        <form>
          <label for="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Introduzca su correo electronico"
            required
          ></input>
          <label for="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Introduzca su contraseña"
            required
          ></input>
          <div className="button_container">
            <button
              className="button_join"
              type="button"
              onClick={() => navigate("/home")}
            >
              Iniciar Sesion
            </button>
            <button
              className="button_register"
              type="button"
              onClick={() => setOpenRegister(true)}
            >
              Registrarse
            </button>
          </div>
          <p className="error escondido">Usuario no registrado!</p>
          <p>Tu puntuacion y racha se guardara automaticamente!</p>
        </form>

        {openRegister && (
          <div className="contenedor_registro_fondo">
            <div className="contenedor_registro">
              <h2>Completar Registro</h2>
              <form>
                <div className="registro_input_data">
                  <label for="user" className="sr-only">
                    User
                  </label>
                  <input
                    type="text"
                    name="user"
                    id="user"
                    maxLength={16}
                    placeholder="Selecciona tu apodo"
                    required
                  ></input>
                  <label for="color" className="sr-only">
                    Color
                  </label>
                  <button
                    className="color_button"
                    type="button"
                    onClick={() => setOpenColors(true)}
                    style={{ backgroundColor: color }}
                  ></button>
                </div>
                <p className="error escondido">
                  Ya existe un usuario con ese apodo!
                </p>
                <button
                  className="submit_button"
                  type="button"
                  onClick={() => {
                    setOpenRegister(false);
                    navigate("/home");
                  }}
                >
                  Completar Registro
                </button>
              </form>
            </div>
          </div>
        )}

        {openColors && (
          <div className="contenedor_colores_fondo">
            <div className="contenedor_colores_texto">
              <h2>Selecciona tu color</h2>
              <div className="contenedor_colores">
                {colorOptions.map((option, i) => (
                  <button
                    key={option}
                    className="color_option"
                    style={{
                      backgroundColor: option,
                      animationDelay: `${i * 0.08}s`,
                    }}
                    onClick={() => {
                      setColor(option);
                      setOpenColors(false);
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
