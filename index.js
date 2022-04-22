const express = require('express')
const app = express()
const port = 3000    
app.use(express.static(__dirname + '/protfolio'));
app.use(express.static(__dirname + '/love/dist'));

app.get('/prome', (req, res) => { 
    res.sendFile('index.html', { root:__dirname + '/love/dist'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})