// // (function(exports,require,module,_filename,_dirname){
// //     const name = "yogesh kumar singh";
// //     console.log(name);
// // })();
// console.log(__filename);
const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url == "/"){
        console.log("this is home side");
    } else if(req.url == "/about"){

        res.end("this is about us!");
    }
    else if(req.url == "/contact"){

        res.end("this is contact us!");
    }
    else if(req.url == "/userapi"){
        fs.readFile('${__dirname}/UserApi/userapi.json', "utf-8", (err,data)=>{
            console.log(data);
            res.end("this is API side for us!");
        });
    }
    else{
        res.writeHead(404,{"Content-Type": "text/html"});
        res.end("<h1>404 page not found Wrong page , bkl :)</h1>");
    }
});
   
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening on port 8000");
});