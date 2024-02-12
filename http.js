const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page")
    }
    if (req.url === '/about') {
        res.end('Here is our about page');
    }
    res.end(
        `
            <h1>Oops!</h1>
            <h3>We can't find the page you were
            looking for.</h3>
            <a href="/" />back home</a>
        `
    )
})

server.listen(5000);