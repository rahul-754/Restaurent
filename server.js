const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
const Person = require('./models/person');

app.get('/', function(req, res) {
  res.send("le mooot diya php k backend pe");
});

app.get('/paneer', function(req, res) {
  res.send("paneer khayega laude");
});

app.get('/biryani', function(req, res) {
  res.send("baap khaye sag bhat beta khaehen biryani");
});

app.post('/rahul', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedData = await newPerson.save();
    res.status(201).json(savedData); // Sending back the saved data
  } catch(err) {
    console.error("Error occurred: ", err);
    res.status(500).send("Server chud gya"); // Sending error response
  }
});


app.get('/abhay',async(req,res) =>{
  try{
     const data = await Person.find()
     console.log("data sent");q
     res.status(201).json(data);
    

  }
  catch(err){
    console.error("Error occurred: ", err);
    res.status(500).send("Server chud gya"); 
  }
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
