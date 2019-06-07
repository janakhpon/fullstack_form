//Assigning values for API
const express = require("express");
app = express(),
  path = require("path"),
  bodyParser = require("body-parser"),
  userRouter = require('./routes/users');
   

//Allow Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Allow XHttp request 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  next();
});


//give access to router
app.use('/api/users', userRouter);


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
//Assign Server port to run
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
