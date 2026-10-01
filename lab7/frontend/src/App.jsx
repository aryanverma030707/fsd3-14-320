const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY218_.jpg",
  bname: "React Design Pattern",
  price:  1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY218_.jpg",
  bname: "The Road to React",
  price:  2886,
  quantity: 3,
  rating: 4.5,
};

function Book(props) {
  const { picUrl, bname, price, quantity, rating } = props.book;
  const qtyStyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
  };

  return (
    <div className="book-card">
      <img src={picUrl} alt={bname} />
      <h2>{bname}</h2>
      <h3>Price: ₹{price}</h3>
      <p>Quantity: {quantity}</p>
      <p>Rating: ⭐ {rating}</p>

      <div className="buttons">
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1 className="title">Online Bookstore</h1>

      <div className="container">
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
      </div>
    </>
  );
}