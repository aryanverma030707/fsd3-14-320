// export default function Fruit(props) {
    
  
//     return (
//       <div className="fruit-card">
//         <img src={picUrl} alt={name} />
//         <h2>{name}</h2>
//         <p>Price: ₹{price}</p>
//         <p>Quantity: {quantity}</p>
//         <div className="fruit-buttons">
//           <button className="add-cart">Add to Cart</button>
//           <button className="buy-now">Buy Now</button>
//         </div>
//       </div>
//     );
//   }

const products = [
    {title: "Cabbage", id: 1, isFruit: false},
    {title: "Apple", id: 2, isFruit: true},
    {title: "Banana", id: 3, isFruit: true},
    {title: "Potato", id: 6, isFruit: false}
  ];
  
  const Fruit = (props) => {
    const { picUrl, name, price, quantity } = props.fruit;
  
    const ListItem = products.map((item) => (
      <li key={item.id} style={{color: item.isFruit ? "red" : "black"}}>
        {item.title}
      </li>
    ));
  
    return (
      <>
        <div className="fruit-card">
          <img src={picUrl} alt={name} />
          <h2>{name}</h2>
          <p>Price: ₹{price}</p>
          <p>Quantity: {quantity}</p>
  
          <div className="fruit-buttons">
            <button className="add-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
  
        <div className="product-list">
          <ul>{ListItem}</ul>
        </div>
      </>
    );
  };
  
  export default Fruit;