const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userModel = require("./models/userModel");
const unavailableModel = require("./models/unavailableModel");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const saltRounds = 10;
const cors = require("cors");
const professionalModel = require("./models/professionalModel");
const app = express();
require("dotenv").config();


// BodyParser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// MongoDB starts
mongoose.connect(process.env.MONGODB);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Successfully connected Database");
});
// MongoDB ends
app.post("/unavailable", (req,res) => {
  const data = req.body;
  const newUnavailable = new unavailableModel({
    email: data.email,
    unavailable: data.unavailable,
  });
  console.log(newUnavailable);
  newUnavailable.save().then(() => {
    res.send("Saved Succesfully");
  }).catch((err) => {
    console.log(err);
  });
})

app.post("/user/signup", (req, res) => {
  const data = req.body;
  bcrypt.hash(data.password, saltRounds, function (err, hash) {
    const newUser = new userModel({
      name: data.name,
      location: data.location,
      email: data.email,
      mobile: data.mobile,
      password: hash,
    });
    console.log(newUser);
    newUser.save().then(() => {
      res.send("Saved Succesfully");
    }).catch((err) => {
      console.log(err);
    });
  });
})

app.post("/professional/signup", (req, res) => {
  const data = req.body;
  bcrypt.hash(data.password, saltRounds, function (err, hash) {
    const newProfessional = new professionalModel({
      name: data.name,
      profession: data.profession,
      location: data.location,
      rate: data.rate,
      email: data.email,
      contact: data.contact,
      time: data.time,
      password: hash,
    });
    console.log(newProfessional);
    newProfessional.save().then(() => {
      res.send("Saved Succesfully");
    }).catch((err) => {
      console.log(err);
    });
  });
});

app.post("/user/login", (req, res) => {
  const email = (req.body.email);
  const password = req.body.password;

  userModel
    .findOne({ email: email })
    .then((foundUser) => {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result === true) {
            res.json("go");
          } else {
            res.json("wrongPassword");
          }
        });
      } else {
        res.json("NotUser");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/professional/login", (req, res) => {
  const email = (req.body.email);
  const password = req.body.password;

  professionalModel
    .findOne({ email: email })
    .then((foundUser) => {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result === true) {
            res.json("go");
          } else {
            res.json("wrongPassword");
          }
        });
      } else {
        res.json("NotUser");
      }
    })
    .catch((err) => {
      console.log(err);
    });
})

// Professional Home page.
app.get("/professionals", (req, res) => {
  professionalModel.find({}).then((err, result) => {
    if(err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
});

app.get("/users", (req,res) => {
  userModel.find({}).then((err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});

app.get("/test", (req,res) => {
  res.send("Hsssss");
})


// Listen to the Port.
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});