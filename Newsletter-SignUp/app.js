const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
//app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.urlencoded({extented: true}));
app.use(express.static("public"));  // this static method we are useing for css file and image file which is local in our computer so that's why we are using by create public folder and put css and image folder inside it.
//it provide the path for static file (local file of our computer).



app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address:email,
        status: "subscribed",
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

   const jsonData = JSON.stringify(data);

   const url = "https://us7.api.mailchimp.com/3.0/lists/c5792c22a4";
   const options = {
     method: "POST",
     auth: "shivam1:15f11f61f334b5ef1cd089e9a3721248-us7"
   }

   const request = https.request(url,options,function(response){

     if(response.statusCode === 200){
       res.sendFile(__dirname + "/success.html");
     }
     else{
       res.sendFile(__dirname + "/failure.html");
     }

     response.on("data", function(data){
       console.log(JSON.parse(data));
     })
   })

    request.write(jsonData);
   request.end();

  console.log(firstName, lastName, email);
})

app.post("/failure", function(req,res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000,function(){ // process.env.PORT is use foe heroku to select dynamic PORT.
  console.log("Server is running on port 3000");
})


// API Key
// 15f11f61f334b5ef1cd089e9a3721248-us7

// List Id
// c5792c22a4
