const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let path;
    switch(req.url){
        case '/':
            path = 'index.html';
            break;
        case '/about':
            path = 'about.html';
            break;
        case '/contact-me':
            path = 'contact-me.html';
            break;
        default:
            path = '404.html';
            break;
    };

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        };
    });
  }); 

  server.listen(8080, () => {
    console.log(`Server running at http://localhost:8080/`);
  });