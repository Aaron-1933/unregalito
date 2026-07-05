import "./Card.css";

export default function Card({ nombre, precio, imagen}) {
  return (
    <article className="card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{precio}</p>
    </article>
  );
}