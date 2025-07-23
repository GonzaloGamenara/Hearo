import "../styles/LoginScreen.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function LoginScreen() {
  const url =
    "https://urban-zebra-9gggpqx9g5qc7qgq-5000.app.github.dev/api/auth/login";
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    color: "#FF4081",
    user: "",
  });
  const [openRegister, setOpenRegister] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmitLogin(e) {
    e.preventDefault();

    if (!form.email || !form.password) {
      setErrorMessage(
        "Por favor complete todos los campos para iniciar sesion."
      );
      return;
    } else {
      try {
        const res = await axios.post(url, form, { withCredentials: true });
        console.log(res.data.message);
        navigate("/home");
      } catch (error) {
        console.error("Error al iniciar sesion:", error);
        setErrorMessage(error.response.data.message);
      }
    }
  }

  async function handleSubmitRegister(e) {
    e.preventDefault();

    if (!form.user || !form.color) {
      setErrorMessage("Por favor complete todos los campos para registrarse.");
      return;
    } else {
      try {
        const res = await axios.post(url, form, { withCredentials: true });
        console.log(res.data.message);
        navigate("/home");
      } catch (error) {
        console.error("Error al completar el registro:", error);
        setErrorMessage(error.response.data.message);
      }
    }
  }

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
        <form onSubmit={handleSubmitLogin}>
          <label for="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Introduzca su correo electronico"
            onChange={handleChange}
          ></input>
          <label for="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Introduzca su contraseña"
            onChange={handleChange}
          ></input>
          <div className="button_container">
            <button className="button_join" type="submit">
              Iniciar Sesion
            </button>
            <button
              className="button_register"
              type="button"
              onClick={() => {
                if (!form.email || (!form.password && !openRegister)) {
                  setErrorMessage(
                    "Por favor complete todos los campos para registrarse."
                  );
                } else {
                  setErrorMessage("");
                  setOpenRegister(true);
                }
              }}
            >
              Registrarse
            </button>
          </div>
          <p className={errorMessage && !openRegister ? "error" : "escondido"}>
            {errorMessage}
          </p>
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
                    onChange={handleChange}
                  ></input>
                  <label for="color" className="sr-only">
                    Color
                  </label>
                  <button
                    className="color_button"
                    type="button"
                    onClick={() => setOpenColors(true)}
                    style={{ backgroundColor: form.color }}
                  ></button>
                </div>
                <p className={errorMessage ? "error" : "escondido"}>
                  {errorMessage}
                </p>
                <button
                  className="submit_button"
                  type="button"
                  onClick={handleSubmitRegister}
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
                    value={option}
                    name="color"
                    key={option}
                    className="color_option"
                    style={{
                      backgroundColor: option,
                      animationDelay: `${i * 0.08}s`,
                    }}
                    onClick={(e) => {
                      handleChange(e);
                      setOpenColors(false);
                      console.log(form);
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
