// import http from 'http';

// const server = http.createServer();
// server.on('request', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write("<h1 style='color: red;'>Welcome to the HTTP server!</h1>");
//   res.write("<h2 style='color: blue;'>Nodemon is tracking this site</h2>");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


import http from 'http';
import * as teams from './teams.js';

const PORT = 5001;

const sendJsonResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
};

const parswJSONBody = (req) => {
  new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const {pathname, query } = parseurl(req.url, true);
  console.log('pathname:', pathname);
  console.log('query:', query);
  console.log('method:', req.method);

  if (pathname === "/api/v1/teams" && req.method === 'GET') {
    const {total} = query;
    const teams = teams.getAllTeams();
    console.log("Teams:", teams);
    sendJsonResponse(res, 200, teams);
  } else {
    sendJsonResponse(res, 404, { message: '404 - Page not found' });
  }
});

server.listen(PORT, () => {
  console.log(`SIH Server is running on http://localhost:${PORT}`);
});