import express from "express";
import hbs from "hbs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

const data = {
  name: "Jhon Doe",
  title: "Node practice",
};

// Require hbs
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Serve static content
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index", data);
});

app.get("/generic", function (req, res) {
  res.render("generic", data);
});

app.get("/elements", function (req, res) {
  res.render("elements", data);
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
