var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/nav1',function(req,res){

	res.sendFile(__dirname + '/public/nav1.html');

}).get('/nav2',function(req,res){

	res.sendFile(__dirname + '/public/nav2.html');

}).get('/nav3-a',function(req,res){

	res.sendFile(__dirname + '/public/nav3-a.html');

}).get('/nav3-b',function(req,res){

	res.sendFile(__dirname + '/public/nav3-b.html');

}).get('/nav3-c',function(req,res){

	res.sendFile(__dirname + '/public/nav3-c.html');

}).get('/nav3',function(req,res){

	res.sendFile(__dirname + '/public/nav3.html');

}).get('/nav4',function(req,res){

	res.sendFile(__dirname + '/public/nav4.html');

}).get('/nav5',function(req,res){

	res.sendFile(__dirname + '/public/nav5.html');

}).get('/',function(req,res){

	res.sendFile(__dirname + '/public/home.html');

}).listen(8888);
