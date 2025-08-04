const http = require("http")
const url = require("url");
http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path in urlMap) {
        urlMap[path](req, res);
    } else {
        notFound(req, res);
    }
}).listen(3000, () => console.log("서버 시작 합니다, 라우터를 리팩토링 해보자!"));

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`)
    // res.end(`[user] name: andy, age: 30`)
}

const feed = (req, res) => {
    res.end(`<ul>
            <li>picture 1</li>
            <li>picture 2</li>
            <li>picture 3</li>
        </ul>`)
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page Not Found");
}

const urlMap = {
    "/": (req, res) => res.end("Home"),
    "/user": user,
    "/feed": feed
};