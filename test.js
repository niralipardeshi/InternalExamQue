// var fs=require('fs');
// //const { start } = require('repl');
// var file='file.txt';

// fs.existsSync(file,(exists)=>{
//     if(exists) {
//         fs.stat(file,(err,stat)=>{
//             if(err) throw err;
//             if(stat.isFile()) {
//                 fs.readFile(file,(err,data)=>{
//                     if(err) throw err;
//                     console.log(data.toString());
//                 })
//             }
//         })
//     }
// })

const http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hello World</h1>');
    res.end()
}).listen(3000,()=>{
    console.log("post listenin on port 3000");
})