import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log("Request Received on root path");
  res.send("Hello world running from the server running on my machine");
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
