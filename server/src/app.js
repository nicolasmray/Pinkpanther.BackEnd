// const express = require("express");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const routes = require("./routes/index.js");
// const { auth } = require("./Firebase/firebase.js");

// require("./db.js");

// const server = express();

// server.name = "API";

// server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// server.use(bodyParser.json({ limit: "50mb" }));
// server.use(cookieParser());
// server.use(morgan("dev"));
// server.use((req, res, next) => {
//   const allowedOrigins = ['http://localhost:5173', 'https://pinkpanther-backend-ip0f.onrender.com', 'http://localhost:3001'];
//   //const allowedOrigins = ['*'];
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   res.header("Access-Control-Allow-Credentials", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   //res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   // if (req.method === 'OPTIONS') {
//   //   res.sendStatus(200); // Respond with 200 OK for OPTIONS requests
//   // } else {
//     next();
//   //}
// });

// // Use Firebase auth middleware
// server.use((req, res, next) => {
//   req.auth = auth;
//   next();
// });

// server.use("/", routes);

// // Error catching endware.
// server.use((err, req, res, next) => {
//   // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

// module.exports = server;

const express = require("express");
//const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const { auth } = require("./Firebase/firebase.js");
const cors = require("cors"); // Import CORS middleware

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
//server.use(cookieParser());
server.use(morgan("dev"));

// Use CORS middleware
server.use(cors({
  origin: '*',
  credentials: true // Allow credentials (cookies, authorization headers)
}));

// Use Firebase auth middleware
server.use((req, res, next) => {
  req.auth = auth;
  next();
});

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
