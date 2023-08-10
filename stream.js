const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res)=>{
    fs.readFile('./oneWrite.txt', 'utf-8', (err , data)=>{
            if(err) console.log(err);
            res.end(data)

    })
})

server.listen(8000, '127.0.0.1',()=>{
    console.log('Listening File')
});


// my name is muhammad hasan ashraf

