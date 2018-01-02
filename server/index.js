import express from 'express';
import path from 'path';
// const express = require('express');
// const bodyParser = require('body-parser');

const app = express();


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.listen(5150, () => console.log('Listening on port:', 5150));
