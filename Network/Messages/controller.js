// const { list } = require("./store");
const store = require("./store");

function addMessage(userName, message) {
  const fullMessage = {
    user: userName,
    message: message,
    date: new Date(),
  };

  return new Promise((resolve, reject) => {
    if (!userName || !message) {
      return reject("los datos son incorrectos");
    }
    store.add(fullMessage);
    console.log("working");
    resolve(fullMessage);
  });
}

function getAllMessages() {
  return new Promise((resolve, reject) => {
    if (store.list().length <= 0) {
      return reject("there's no messages");
    }
    console.log(store.list());
    return resolve(store.list());
  });
}

module.exports = {
  addMessage,
  getAllMessages,
};
