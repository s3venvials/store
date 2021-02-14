export default function Product(props) {
  const addToCart = (item) => {
    props.addToCart(item);
  };

  console.log(window.innerWidth);

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        marginTop: "2em",
        border: "none",
        textAlign: "center",
      }}
    >
      <img src={props.image} className="card-img-top" alt={props.category} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description.slice(0, 100)}...</p>
        <p>Price: ${props.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart(props.item)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
