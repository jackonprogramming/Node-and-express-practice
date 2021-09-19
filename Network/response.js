exports.success = function (req, res, message, status) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(status || 200).send({ error: false, body: message });
};

exports.error = function (req, res, message, status) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(status).send({ error: true, body: message });
};
