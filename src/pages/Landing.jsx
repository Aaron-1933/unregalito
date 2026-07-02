import "./Landing.css";
import logo from "../assets/logo-blanco.svg";
import iconUser from "../assets/userlogo.png";
import iconGift from "../assets/regalologo.svg";
import iconBag from "../assets/bagicon.svg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <header className="navbar">
          <img src={logo} className="nav-logo" />
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img src={iconUser} alt="Perfil" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconGift} alt="Regalos" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="hero-content">
          <h1>¿No sabes qué pedir?</h1>
          <p>
            Descubre la lista de regalos que tenemos disponible para tus
            eventos.
          </p>
        </div>
      </div>
      <img src={iconBag} className="landing-img" alt="Regalos" />
    </div>
  );
}
