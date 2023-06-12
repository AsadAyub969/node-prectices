const http = require("http");

// const server = http.createServer((req, res) => {
//     res.write("well come to home page");
//     res.end();
// });

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("here is our home page");
    }
    if (req.url === "/about") {
        res.end("here is our short history");
    }
    res.end(`
    <h1>Opp's</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href ='/' >Back Home</a> 
    `);
});

server.listen(3000);
