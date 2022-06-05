const express = require("express");
const app = express();
const server = require("http").createServer(app);
 
// handle production

app.use(express.static(__dirname + "/build/"));
    app.get(/.*/, (req, res) => {
      res.sendFile(__dirname + "/build/index.html");
    });
 
 
// INIT PORT
const PORT = process.env.PORT || 5000;

// RUNNIG THE SERVER
server.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});