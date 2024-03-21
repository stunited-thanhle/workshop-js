// import axios from "axios";

// async function a() {
//   const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return data.data;
// }

// console.log(a());

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}
(async () => {
  await getName("Hoa");
  await getName("Moc");
  await getName("Lan");
})();

// ----------------------------------

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

console.log((await getUsers())[0].id);
console.log((await getUsers())[1].id);
console.log((await getUsers())[2].id);
console.log((await getUsers())[3].id);
console.log((await getUsers())[4].id);

function foo() {
  console.log("foo");
}

function bar() {
  console.log(foo(), "bar");
}

function far() {
  console.log(bar(), "far");
}

function boo() {
  console.log(far(), "boo");
}

boo();
