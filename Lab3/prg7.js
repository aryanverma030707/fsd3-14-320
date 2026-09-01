import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/products" && req.method === "GET") {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify([
            {id:1,name:"AirTag",price:2999},
            {id:2,name:"SmartTag",price:2499}
        ]));
    } else {
        res.writeHead(404, {"Content-Type":"application/json"});
        res.end(JSON.stringify({message:"404 - Page not found"}));
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});