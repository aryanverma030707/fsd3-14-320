import Book from "./components/Book";
import Pen from "./components/Pen";
import Fruit from "./components/Fruit";

import { b1, b2 } from "./data/books";
import { p1, p2 } from "./data/pens";
import { f1, f2 } from "./data/fruits";
import { useState } from "react";

const MyButton = ({ text }) => {
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button
        className="bg-amber-100 text-black text-xl rounded-md m-4 px-4 py-2"
        onClick={handleSubmit}
      >
        {text}
      </button>
      <p className="text-xl m-4">Clicked {count} times</p>
    </>
  );
};

export default function App() {
  return (
    <>
      <MyButton text="Submit" />
    </>
  );
}


// export default function App() {
//   return (
//     <>
//       <h1 className="title">Online Store</h1>

//       <div className="container">
//         <Book book={b1} />
//         <Book book={b2} />
//         <Pen pen={p1} />
//         <Pen pen={p2} />
//         <Fruit fruit={f1} />
//         <Fruit fruit={f2} />
//       </div>
//     </>
//   );
// }
// const b1 = {
//   picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY218_.jpg",
//   bname: "React Design Pattern",
//   price: 1199,
//   quantity: 10,
//   rating: 5.0,
// };

// const b2 = {
//   picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY218_.jpg",
//   bname: "The Road to React",
//   price: 2886,
//   quantity: 3,
//   rating: 4.5,
// };

// const p1 = {
//   picUrl: "https://m.media-amazon.com/images/I/61xReL7eGeL._SL1254_.jpg",
//   company: "Parker",
//   color: "Blue",
//   price: 150,
// };

// const p2 = {
//   picUrl: "https://m.media-amazon.com/images/I/61Pu-5ceMxL._SL1500_.jpg",
//   company: "Parker",
//   color: "Black",
//   price: 180,
// };

// export default function App() {
//   return (
//     <>
//       <h1 className="title">Online Bookstore</h1>

//       <div className="container">
//         <Book book={b1} />
//         <Book book={b2} />
//         <Book book={b1} />
//         <Book book={b2} />
//         <Pen pen={p1} />
//         <Pen pen={p2} />
//         <Pen pen={p1} />
//         <Pen pen={p2}/>
//       </div>
//     </>
//   );
// }