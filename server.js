const express = require("express");
// const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./Network/response");

const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, console.log(`server started on port ${PORT}`));

router.post("/post", (req, res) => {
  console.log("Connected to React");
  response.success(req, res, "hello react");
});

router.get("/message", function (req, res) {
  //   console.log(req.headers);
  //   res.send("hello handsome, are using the method get");

  //   res.status(200).send({ response: true, body: [1, 2, 3] });
  response.success(req, res, "hello from get method");
});

router.post("/message", function (req, res) {
  // query work with de URL params

  //   console.log(req.query);
  //   console.log(req.body);
  //   res.send("hello handsome, are posting");

  if (req.query.error == "ok") {
    response.error(req, res, "this is a error fucking monkey", 500);
  } else {
    response.success(req, res, "hello from post method", 201);
  }
});

// app.use("/", function (req, res) {
//   res.send("holis wapox");
// });

app.use("/app", express.static("public"));

app.listen(3000);
console.log("the application is listen in: http://localhost:3000 ");
