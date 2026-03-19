import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo.png";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === "admin@unregalito.com" && form.password === "1234") {
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

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

        <button>Iniciar</button>

        <p className="forgot-password">si no tienes contraseña, solicitala <span>aqui</span></p>
      </div>

      
    </div>
  );
}
