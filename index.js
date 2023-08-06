// first part done ✝✝✝✝✝✝✝✝✝✝✝✝✝

// const myName = "Muhamamd ahsan"

// console.log(myName)

// Extra Work..... From Thapa technical

// const fs = require('fs');
// const myName = "Muhamamd ahsan"
// fs.appendFileSync('./text/input.txt', myName)
// const data =  fs.readFileSync('./text/input.txt', 'utf-8');
// console.log(data)
// fs.renameSync('./text/one.txt',  'oneWrite.txt')




// const fs = require('fs');
// const bio = fs.readFileSync('./text/input.txt', 'utf-8');

// console.log(bio);


// Second part done ✝✝✝✝✝✝✝✝✝✝✝✝✝

// const fs = require('fs');
// const bio = fs.readFileSync('./text/input.txt', 'utf-8')
// console.log(bio);

// const bioData = `my name is muhammad hasan ashraf and i am learning web development from smit and i think in 2 || 3 months i m become a web developer  and i want to become a best developer in pakistan`
//  const res = fs.writeFileSync('./text/input.txt', bioData)

//  console.log("file wtitten successfully");



// Third part done ✝✝✝✝✝✝✝✝✝✝✝✝✝
// Asynchronus Code.....
// const data = ` hi I m  moosa here i m ajju`
// const fs = require('fs');
// fs.readFile('./text/input.txt','utf-8',(err,res)=>{
//     console.log(data)
//     if(err){
//         console.log(err);
//     }
// });

// console.log('readingFileData...');


// Synchronus Code.....
// const data1 = ` hi I m  moosa here i m ajju`
// const fs = require('fs');
// fs.readFileSync('./text/input.txt','utf-8',(err,res)=>{
//     console.log(data1)
//     if(err){
//         console.log(err);
//     }
// });

// console.log('readingFileData...Data 1');





// const data1 = ` hi I m  moosa here i m ajju`
// const fs = require('fs');
// fs.readFile('./text/input.text','utf-8',(err, res)=>{
//     fs.readFile(`${data1}.txt , 'utf-8'`,(err, res2)=>{
//         fs.readFile('./text/append.txt', 'utf-8',(err, res3)=>{
//            fs.readFile('final.txt', `${res2} ${res3} `,'utf-8' , (err)=>{
//             if(err) throw err;
//             console.log("yOUR FILE has been Saved   :D ",err)

//            });
//         });
//     });
// });



// Fourth part done ✝✝✝✝✝✝✝✝✝✝✝✝✝

// const fs = require('fs');

// fs.readFile('./text/final.txt', 'utf-8', (err, rep) => {
//     if(err) return console.log('Error')

//         fs.readFile('./text/append.txt', 'utf-8', (err, rep1)=>{
//             console.log(rep1)

//             fs.readFile('./text/one.txt','utf-8',(err, rep2)=>{
//                  console.log(rep2)

//                 fs.readFile('./text/text.txt', 'utf-8', (err , rep3) =>{
//                     console.log('Your file has been written')

//                 });
//             });
//         });
//     });
    
//     console.log('kaam Hogaya')



// fifth Part 


// const fs = require('fs');
// const http = require('http')


// fs.readFile('./text/final.txt', 'utf-8', (err, rep) => {
//     if(err) return console.log('Error')

//         fs.readFile('./text/append.txt', 'utf-8', (err, rep1)=>{
//             console.log(rep1)

//             fs.readFile('./text/one.txt','utf-8',(err, rep2)=>{
//                  console.log(rep2)

//                 fs.readFile('./text/text.txt', 'utf-8', (err , rep3) =>{
//                     console.log('Your file has been written')

//                 });
//             });
//         });
//     });
    
//     console.log('kaam Hogaya')



// const fs = require('fs')
// const http = require('http')

// http.createServer((request , resolve)=>{
// request.end('Hello From The Server')
// })



// const fs = require('fs')
// const http = require('http')

// const server =  http.createServer((req , response)=>{
//     console.log(req)

//     response.end('Hello From The Server')
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log('Hello Server How are you Listen to requests on port 8000')
// });



// const fs = require('fs');
// const http = require('http');
// const url = require('url');







// const fs = require('fs');
// const http = require('http');
// const url = require('url');


// const server =  http.createServer((req , response)=>{
//     console.log(req.url)

//     response.end('Hello From The Server')
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log('Hello Server How are you Listen to requests on port 8000')
// });




const fs = require('fs');
const http = require('http');
const url = require('url');
const port = 8000


const server =  http.createServer((req , response)=>{
    const req_url_PathName = req.url;
    // console.log(req.url)
    if(req_url_PathName === '/' || req_url_PathName === '/home') {

        response.end('This is the home page')

    } else if (req_url_PathName === '/services'){
        response.end('This is the service Page')

    }else {
        response.writeHead(404);
        response.end('Page Not Found')
    }

});

server.listen(port,"127.0.0.1",()=>{
    console.log('Hello Server How are you Listen to requests on port 8000')
});

