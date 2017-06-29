var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var app = express();

app.use(express.static('public'));

app.post('/', upload.single('myFile'), function(req, res){
	res.json({size: parseInt(req.headers["content-length"])});
});

app.listen(3000);

