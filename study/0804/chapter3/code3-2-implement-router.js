const http = require("http");
const url = require("url");
http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path === "/user") {
        res.end("[user] name: andy, age: 30")
    } else if (path === "/feed") {
        res.end(`<ul>
            <li>picture 1</li>
            <li>picture 2</li>
            <li>picture 3</li>
        </ul>`)
    } else {
        res.statusCode = 404;
        res.end("404 page Not Found");
    }
}).listen(3000, () => console.log("서버 시작, 라우터를 만들어보자!"));