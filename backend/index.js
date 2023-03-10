const express = require("express");
const app = express();
const cors = require("cors");
const port = 6565;

const con = require("./routes/database"); // Connection object to establish connection with database

con.connect((error) => {
  // Connecting to database
  if (error) {
    throw error;
  } else {
    console.log("connected");
  }
});

app.use(cors());
app.use(express.json({ limit: "20mb" })); // Setting limit of data upto 20 mb

app.use("/login", require("./routes/authentication/login"));
app.use("/signup", require("./routes/authentication/signup"));
app.use("/sendPin", require("./routes/authentication/sendPin"));
app.use("/changePwd", require("./routes/authentication/changePwd"));

app.use("/changePassenger", require("./routes/passenger/changePassenger"));
app.use("/changeImage", require("./routes/passenger/changeImage"));
app.use("/fetchPassenger", require("./routes/passenger/fetchPassenger"));
app.use("/generateFare", require("./routes/passenger/generateFare"));
app.use("/fetchAllStations", require("./routes/passenger/fetchAllStations"));

app.use("/recharge", require("./routes/conductor/recharge"));
app.use("/scanTicket", require("./routes/conductor/scanTicket"));
app.use("/changeConductor", require("./routes/conductor/changeConductor"));
app.use("/fetchConductor", require("./routes/conductor/fetchConductor"));
app.use("/changeImage", require("./routes/conductor/changeImage"));

app.use("/createTicket", require("./routes/ticket/createTicket"));
app.use("/fetchTicket", require("./routes/ticket/fetchTicket"));
app.use("/fetchAllTickets", require("./routes/ticket/fetchAllTickets"));
app.use("/cancelTicket", require("./routes/ticket/cancelTicket"));

// app.use('/fetchuser', require('./routes/admin/fetchuser'));
// app.use('/fetchtickets', require('./routes/admin/fetchtickets'));
// app.use('/fetchconductor', require('./routes/admin/fetchconductor'));
app.use("/createconductor", require("./routes/admin/createconductor"));

app.listen(port, () => {
  console.log("App listining at http://localhost:" + port);
});
