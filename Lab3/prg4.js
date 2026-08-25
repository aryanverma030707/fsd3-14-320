import http from "http";

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
];

let cart = [];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/products") {
        res.end(JSON.stringify(products));
    }
    else if (req.method === "GET" && req.url === "/cart") {
        res.end(JSON.stringify(cart));
    }
    else if (req.method === "POST" && req.url === "/cart") {
        cart.push(products[0]);
        res.end(JSON.stringify({ message: "Product added to cart", cart }));
    }
    else if (req.method === "POST" && req.url === "/checkout") {
        let total = 0;
        cart.forEach(item => total += item.price);
        cart = [];
        res.end(JSON.stringify({ message: "Checkout successful", total }));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "404 - Page not found" }));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/products");
});