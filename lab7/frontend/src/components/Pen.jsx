// const p1 = {
//     picUrl: "https://m.media-amazon.com/images/I/61xReL7eGeL._SL1254_.jpg",
//     company: "Parker",
//     color: "Blue",
//     price: 150,
//   };
  
//   const p2 = {
//     picUrl: "https://m.media-amazon.com/images/I/61Pu-5ceMxL._SL1500_.jpg",
//     company: "Parker",
//     color: "Black",
//     price: 180,
//   };
  
export default function Pen(props) {
  const { picUrl, company, color, price } = props.pen;

  return (
    <div className="pen-card">
      <img src={picUrl} alt={company} />
      <h2>{company}</h2>
      <p>Color: {color}</p>
      <p>Price: ₹{price}</p>
      <div className="pen-buttons">
        <button className="add-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
}