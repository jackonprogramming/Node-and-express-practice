const list = [];

function addMessage(message) {
  list.push(message);
  console.log(list);
}

function getMessage() {
  console.log(list);
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessage,
};
