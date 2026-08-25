import http from "http";

const product = {
    mobile: "iPhone 15",
    price: 70000,
    discount: 10,
    company: "Apple"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
});

server.listen(3000, () => {
    console.log("HTTP Server running at http://localhost:3000");
});