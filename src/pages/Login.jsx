import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/landing");
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} className="login-logo" />

        <h2>¡Hola!</h2>
        <p>Por favor, llena los siguientes campos</p>

        <div className="input-group">
          <input type="text" placeholder="Usuario" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Contraseña" />
        </div>

        <button onClick={handleLogin}>Iniciar</button>

        <p className="forgot-password">si no tienes contraseña, solicitala <span>aqui</span></p>
      </div>
    </div>
  );
}