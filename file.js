const fs = require('fs')

// fs.writeFileSync('./test.txt',"hello world")

// async
// fs.writeFile("./newfile.txt","hello thiis is new file", (err) =>{

// })
//  reading file through async
// const result = fs.readFileSync("./newfile.txt","utf-8")

// fs.readFile("./newfile.txt","utf-8", (err, result)=>{
//     if (err){
//         console.log("error",err);

//     }
//     else{
//         console.log(result)
//     }
// }) 
 fs.appendFileSync("./newfile.txt",`${new Date().getDate().toLocaleString()},\n`);
