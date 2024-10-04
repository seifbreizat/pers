var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var server =require("http").createServer(app);
var PORT = env.process.PORT || 5000;


app.set('pview engine', "ejs");
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "BookConsult.js")));


app.use((req, res, next)=> {
    res.locals.msg ="";
    next();
})
app.get("/BookConsult.js", (req, res) => {

    res.render("index");
});




app.post('/send-email', (req,res) => {
    
console.log("jjjjjj", req.body);

let output = `
                  
      <h1> Thanks for contacting us</h1>
  <ul>
  <li> Name: ${req.body.name} </li>
    <li>Email: ${req.body.email}  </li>
  <li>Subject: ${req.body.subject} </li>
  <li>Message: ${req.body.name}  </li>

  </ul>`;

    var transporter = nodemailer.createTransporter = ({

        service:'gmail',
        port: 465,
        logger: true,
        debug:true,
        secure:true,
        secureConnection: false,
        auth:{
          _user:'seifalbreizat@gmail.com',
            _pass:''
        },
        tls: {
            rejectUnAuthorized: true
        }
    
    });
   
    // eslint-disable-next-line no-undef
   



   let mailOptions = {
    from : "`Contact Support` ",
    // eslint-disable-next-line no-undef
    to : `seifalbreizat@gmail.com`,
    subject: "Issue Contact Reuest",
    text: "Thanks fro contacting us",
    html: output
};


transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
        console.log(error);
        // eslint-disable-next-line no-undef
        res.status(500).send('Error sending email');
        
    } else {

        console.log('Email sent:'+ info.res);
        // eslint-disable-next-line no-undef
        console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
        res.render('Email sent successfully');
    }
    response.redirect('/');
    

})
    })


server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
