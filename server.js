// Setting up a server 

const http = require('http');  // importing http module
const port = 3000; // port for server to listen on

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello Node Js');
}).listen(port);
console.log('Server running at %d ',port);