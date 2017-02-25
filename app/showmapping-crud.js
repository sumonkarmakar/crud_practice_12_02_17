var express = require('express');
var router = express.Router();
bodyParser = require('body-parser');
var TheaterFile=require('./theatre-crud.js');
var MovieFile=require('./movie-crud.js');
var mongoose = require('mongoose');

// defining schema
var Schema= mongoose.Schema;
var ShowMappingSchema = mongoose.Schema({
	theater: {type:Schema.Types.ObjectId,ref:'Theatre'}, // nested schema
	movie:   {type:Schema.Types.ObjectId,ref:'Movie'}
});

var ShowMapping = mongoose.model('ShowMapping',ShowMappingSchema,'showmappings');

// add show
router.post('/addShow',function(req,res){
	console.log(req.body);
	var doc = new ShowMapping({
		theater:req.body.theater,
		movie:req.body.movie
	});

	doc.save(function(err,docs){
		if(err) throw err;
		console.log("Theatre saved successfully.");
		res.json(docs);
	});
});

// get show
router.get('/getShow',function(req,res){
  ShowMapping.find({}).populate('theater').populate('movie').exec(function(err,docs){
    if(err) return console.log(err);
    res.json(docs); 
  });
});


module.exports = router;