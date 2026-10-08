
# Component




# Object Destructure 
const { picUrl, bname, price, quantity, rating } = props.book;
- Does not depend on order , if property is not available then it initialise with null 


const {price,picurl}= props.book;
-it only takes price and picurl from the book 

const{price, .....rest} = props.book;

# any components include Style 
1. external css - create class in index.css and use in component
2. internal css - create property as object like 

const { picUrl, bname, price, quantity, rating } = props.book;
  const qtyStyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
  }

3. inline css- in this method we use 2 curly braces with style attributes. All the Css 





- App.jsx should have minimum code .
- 
- By Default button in HTML is Submit button 