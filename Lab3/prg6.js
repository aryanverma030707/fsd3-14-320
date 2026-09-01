import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        const stream=createReadStream('./pages/airtag.html');
        stream.pipe(res);
    }
    else if(req.url==='/mobile'){
        res.writeHead(200,{'Content-Type':'application/json'});
        const stream=createReadStream('./data/product.json');
        stream.pipe(res);
    }
    else if(req.url==='/manual'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        const stream=createReadStream('./data/chatgpt.txt');
        stream.pipe(res);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('404 - Page not found');
    }
});

server.listen(7777,()=>{
    console.log('Server is running on http://localhost:7777');
});