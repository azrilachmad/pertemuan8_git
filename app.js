// Node Module
const http = require('http')
const route = require('./route')
const fs = require('fs')


const pageRoute= (route, res)  =>{
    fs.readFile(route, (err, data) =>{
     //Error Handling
     if(err){
        res.writeHead(404)
        res.write('Error : page not found')
    // Menampilkan Halaman
    }else{
        res.write(data)
    }
    res.end()
})
}

// Create Http Server
http
  .createServer((req, res)  => {
    const url = req.url

    // Content type html
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    
    // Route name check
    if(url === '/about'){
        pageRoute('./about.html', res)
    }else if(url === '/contact'){
        pageRoute('./contact.html', res)
    }else{
        pageRoute('./index.html', res)
    }


    
})
.listen(3000, () =>{
    console.log('Server running at http://localhost:3000')
})
