const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const User = require("./database/models/user");
const session = require("express-session")
const dbConnection = require("./database")
const MongoStore = require("connect-mongo")(session)
const passport = require("./passport");
const morgan = require("morgan");
// Brings in user route
const user = require("./routes/user")
const bodyParser = require("body-parser")
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

app.use(
  session({
    secret: "sad-panda",
    store: new MongoStore({mongooseConnection: dbConnection}),
    resave: false,
    saveUninitialized: false
  })
)
//Brings passport in
app.use(passport.initialize())
// to deserialize the User
app.use(passport.session())
app.use("/user", user)
// Creates User on submit
app.post("/submit", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/constitutionproject");
// Change to this one below when everything is ready to go online
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/constitutionproject");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
