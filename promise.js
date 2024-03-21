function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}

getName("Hoa")
  .then(() => getName("Moc"))
  .then(() => getName("Lan"));

// ---------------------------------------

function getUsers(resolve) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

const promiseUsers = new Promise((resolve, reject) => {
  getUsers(resolve);
});

promiseUsers
  .then((data) => console.log(1))
  .then((data) => console.log(2))
  .then((data) => console.log(3));
