var express = require('express')

var app = express()

var port = process.env.PORT;

if(port == null || port == ""){
	port = 3000
	console.log('O server esta online na porta' + port)
} 

app.listen(port);

/*set view engine express*/
app.set('view engine' , 'pug')
app.set('views' , './views')
app.use(express.static('public'));

app.get("/" , (req , res ) =>{
    res.render('index')
})

module.exports = app