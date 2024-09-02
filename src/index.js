import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


var express = require('express');
var nodemailer = require('nodemailer');
var path = require('path');
var http =  require('http');

var app = express();
 var port =500;
var server = http.server(app);

app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(_dirname, "page/BookConsult.js")));

app.get("/BookConsult.js", function(req, response){

  response.sendFile(path.join(_dirname, "page//BookConsult.js"))
})