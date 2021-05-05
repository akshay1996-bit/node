const fs= require("fs")
const http=require("http")

const home = fs.readFileSync("home.html","utf-8")
const data = fs.readFileSync("data.txt","utf-8")

http.createServer((req,res) =>{

    const path= req.url

    if(path === "/home")
    {
        res.end(home)
    }
    else if(path === "/movie")
    {
                res.end("This is Movies page")
    }

    else if(path === "/cricket")
    {
        res.end("This is cricket page")
        
    }

    else if(path === "/update")
    {   req.on("data",(chunk)=>{
        fs.writeFileSync("data.txt",chunk)
    })
        
        res.end(console.log("uploaded"))
    }

    else
    {
        res.end("404 Page not found")
    }


}).listen(3000,"127.0.0.1",() =>{
    console.log("server is listening at port 3000")
})