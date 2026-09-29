const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/91FlBY2B6yL._AC_UY436_QL65_.jpg",
  bname: "React Design Pattern ",
  price: 1299.00,
  quantity: 10,
  rating: 4.5,
};

function Book(){
  return(
    <div>
      <img src={b1.picUrl} alt={b1.bname} />
      <h1>{b1.bname}</h1>
      <h2>Price: {b1.price.toFixed(2)}</h2>
      <h3>Quantity: {b1.quantity}</h3>
      <h4>Rating: {b1.rating}</h4>
    </div>
  );
}




export default function App(){
  return(
  <>
  <h1> Hello React</h1>
  <Book />
  <Book />
  <Book />
  </>
  );
}