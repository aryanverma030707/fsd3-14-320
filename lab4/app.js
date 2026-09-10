import http from "http";
import { getAllTeams, addTeam, getTeamById } from "./teams.js";
import { parse as parseUrl } from "url";

const PORT = 5001;

const sendJson = (res, statusCode, data, keyword, msg) => {
    res.writeHead(statusCode, { "content-type": "application/json" });
    if (!data) {
        res.end(JSON.stringify({ [keyword]: msg }));
        return;
    }
    res.end(JSON.stringify({ [keyword]: msg, data }));
};

const parseJSONBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
        req.on("error", reject);
    });
};

const server = http.createServer(async (req, res) => {
    const parsedUrl = parseUrl(req.url, true);
    const { pathname } = parsedUrl;
    const method = req.method;

    try {
        if (pathname === "/api/teams" && method === "GET" && parsedUrl.query.id) {
            const id = parseInt(parsedUrl.query.id);
            const team = getTeamById(id);
            if (team) {
                sendJson(res, 200, team, "message", "Team found");
            } else {
                sendJson(res, 404, null, "error", `Team with ID ${id} not found`);
            }
        } else if (pathname === "/api/teams" && method === "GET") {
            const teams = getAllTeams();
            sendJson(res, 200, teams, "message", "Teams retrieved successfully");
        } else if (pathname === "/api/teams" && method === "POST") {
            const body = await parseJSONBody(req);
            if (!body.name) {
                sendJson(res, 400, null, "error", "Team name is required");
                return;
            }
            const newTeam = addTeam(body);
            sendJson(res, 201, newTeam, "message", "Team added successfully");
        } else {
            sendJson(res, 404, null, "error", "Route not found");
        }
    } catch (error) {
        sendJson(res, 500, null, "error", "Internal Server Error");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});