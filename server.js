var express = require('express');
var app = express();

app.use(express.static(__dirname + '/react-redux-meteo-ip/src/'));

app.listen(process.env.PORT || 8002);