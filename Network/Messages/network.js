const express = require("express");
// const bodyParser = require("body-parser");

const response = require("../response");
const controller = require("./controller");
const router = express.Router();
// const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

// app.listen(PORT, console.log(`server started on port ${PORT}`));

router.post("/post", (req, res) => {
  console.log("Connected to React");
  response.success(req, res, "hello react");
});

router.get("/", function (req, res) {
  controller
    .getAllMessages()
    .then((e) => {
      response.success(req, res, e, 200);
    })
    .catch((e) => {
      response.error(req, res, e, 400);
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((e) => {
      response.success(req, res, e, 200);
    })
    .catch((e) => {
      response.error(req, res, e, 404);
    });
  // query work with de URL params

  //   console.log(req.query);
  //   console.log(req.body);
  //   res.send("hello handsome, are posting");

  //   if (req.query.error == "ok") {
  //     response.error(req, res, "this is a error fucking monkey", 404);
  //   } else {
  //     response.success(req, res, "hello from post method", 201);
  //   }
});

module.exports = router;
