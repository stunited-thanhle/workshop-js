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
