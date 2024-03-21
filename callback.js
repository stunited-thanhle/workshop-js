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
