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
