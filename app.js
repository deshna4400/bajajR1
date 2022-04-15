const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const { response } = require("express");
const app = express();

const port = process.env.PORT|| 5000
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/",function(request,response)
{
    response.send("Hi");
})

app.post("/bfhl", function(request, response)
{
    let result = {}
    const is_success = true;
    const data = request.body.data;
    var alphabets = [];
    var numbers = [];

    data.forEach((value)=> {
        if(!isNaN(value)){
            numbers.push(value)
        }
        else{
            if(value>="A" && value<="Z" || value>="a" && value<="z"){
                alphabets.push(value);
            } 
        }
    })
    result = {
        is_success:is_success,
        user_id: "deshnajain_04042000",
        email: "deshnajaincs19@acropolis.in",
        roll_number: "0827CS191080",
        numbers : numbers,
        alphabets:alphabets
    };
    response.json(result);
})
app.listen(port);


