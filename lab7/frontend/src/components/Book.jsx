export default function Book(props) {
  const { picUrl, bname, price, quantity, rating } = props.book;

  return (
    <div className="book-card">
      <img src={picUrl} alt={bname} />
      <h2>{bname}</h2>
      <h3>Price: ₹{price}</h3>
      <p>Quantity: {quantity}</p>
      <p>Rating: ⭐ {rating}</p>
      <div className="buttons">
        <button className="add-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
}