import "./Card.module.css";

function Card(props) {
  return (
    <div className="card">
        <h2>{props.Name}</h2>
        <p>{props.Text}</p>
    </div>
  );
}

export default Card;
