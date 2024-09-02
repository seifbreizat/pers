"use strict";

/* eslint-disable no-undef */
var express = require('express');

var nodemailer = require('nodemailer');

var path = require('path');

var http = require('http');

var app = express();
var port = 5000;
var server = http.server(app);
app.set('port', port);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express["static"](path.join(_dirname, "page/BookConsult.js")));
app.get("/BookConsult.js", function (req, response) {
  response.sendFile(path.join(_dirname, "page//BookConsult.js"));
});
app.get("/BookConsult.js", function (req, response) {
  response.sendFile(path.join(__dirname, "src/BookConsult.js"));
});
app.post('/send-email', function (req, response) {
  var name = req.body.name;
  var email = req.body.email; // eslint-disable-next-line no-undef

  var subject = req.body.subject;
  var message = req.body.message;
  var transporter = nodemailer.createTransporter = {
    service: 'gmail',
    auth: {
      _user: 'seifalbreizat@gmail.com',
      _pass: 'bastabasta'
    }
  }; // eslint-disable-next-line no-undef

  var mailOptions = {
    name: name,
    // eslint-disable-next-line no-undef
    email: email,
    // eslint-disable-next-line no-undef
    subject: subject,
    text: message
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error); // eslint-disable-next-line no-undef

      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:' + info.response); // eslint-disable-next-line no-undef

      res.send('Email sent successfully');
    }

    response.redirect('/');
  });
});
server.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});