const express = require("express");
const app = express();
const port = 3000;

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", "./views"); // folder where Pug files are

// Route that renders the Pug template
app.get("/", (req, res) => {
  res.render("index", { name: "Binod" }); // name variable for template
});

// Start the server
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
