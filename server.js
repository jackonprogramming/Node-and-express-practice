const express = require("express");
const bodyParser = require("body-parser");

// const response = require("./Network/response");
const router = require("./Network/router");
// const PORT = process.env.PORT || 8080;

var app = express();

// app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);
// app.listen(PORT, console.log(`server started on port ${PORT}`));

// app.use("/", function (req, res) {
//   res.send("holis wapox");
// });

// app.use("/app", express.static("public"));

app.listen(3000);
