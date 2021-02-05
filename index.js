const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const session = require("express-session");
const cors = require("cors");
const errorHandler = require("errorhandler");
mongoose.promise = global.Promise;
const isProduction = process.env.NODE_ENV === 'production';

const PORT = process.env.PORT || 8080

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use("/api", require("./api"));

if (!isProduction) {
  app.use(errorHandler());
}

//Configure Mongoose
// mongoose.connect('mongodb://localhost/clinic-db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   upsert: true,
// });
mongoose.connect(
  process.env.MONGO_DB_URI ||
    'mongodb+srv://admin:88442211bmw@cluster0.l7txu.mongodb.net/hospital',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, upsert: true }
);
mongoose.connection.on('connected', () => {
  console.log('MONGOOSE IS CONNECTED');
})
mongoose.set('debug', true);
require('./models/Users');
require('./models/Clients');
require("./config/passport");
app.use(require('./routes'));


//Error handlers & middlewares
if (!isProduction) {
  app.use((err, req, res,next) => {
    res.status(err.status || 500);
    document.querySelector("/html/body/pre/br[1]").innerHTML(res.status);
    
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res,next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});
//process.env.NODE_ENV === 'production';

if  (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));