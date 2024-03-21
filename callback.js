function getName(name) {
  setTimeout(() => {
    console.log(name);
  }, Math.floor(Math.random() * 100) + 1);
}
getName("Hoa");
getName("Moc");
getName("Lan");

// Hoa -> Moc -> Lan
function getNameCallback(name, callback) {
  setTimeout(() => {
    console.log(name);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}
getNameCallback("Hoa", () => {
  getNameCallback("Moc", () => {
    getNameCallback("Lan", () => {});
  });
});

// -------------------------------------

function getUsers(callback) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      callback(error);
    });
}

getUsers((data) => {
  console.log(data[0].id);
  getUsers((data) => {
    console.log(data[1].id);
    getUsers((data) => {
      console.log(data[2].id);
      getUsers((data) => {
        console.log(data[3].id);
        getUsers((data) => {
          console.log(data[4].id);
          getUsers((data) => {
            console.log(data[5].id);
          });
        });
      });
    });
  });
});

getUsers((data) => console.log("1"));
getUsers((data) => console.log("2"));
getUsers((data) => console.log("3"));
getUsers((data) => console.log("4"));
getUsers((data) => console.log("5"));
