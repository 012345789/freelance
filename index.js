"use strict";

var express = require("express");
var path = require("path");

var app = express();

app.use("/css", express.static(__dirname + "/css"));

app.use("/font-awesome", express.static(__dirname + "/font-awesome"));

app.use("/fonts", express.static(__dirname + "/fonts"));

app.use("/img", express.static(__dirname + "/img"));

app.use("/js", express.static(__dirname + "/js"));

app.use("/less", express.static(__dirname + "/less"));

app.use("/mail", express.static(__dirname + "/mail"));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
	var host = server.address().address;
    var port = server.address().port;

    console.log("dirname", __dirname);
    console.log('Application running on port', port);
});
