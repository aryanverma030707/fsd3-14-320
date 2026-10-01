#   Frontend-Backend
1. create project folder (lab7)
2. create frontend backend folder with in project folder
3. open terminal and split it in two 
4. open frontend in to left side
5. open backend into right side terminal
6. IN backend
    a. initialize backend by `npm init -y`
    b. install nodemon by `npm i nodemon`
    c. open package.json from backend, update `type to module` and script 
    d. create app.js
7. In frontend
    a. npm create vite@latest
    b. enter . as project name
    c. select frame work as react from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend





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
```

const { picUrl, bname, price, quantity, rating } = props.book;
  const qtyStyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
  }

3. inline css- in this method we use 2 curly braces with style attributes. All the Css 