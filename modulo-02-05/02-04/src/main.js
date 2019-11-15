const myPromisse = () =>
  new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("OK");
    }, 2000);
  });

// myPromisse().then(response => ...)

async function execPromisse() {
  const response = await myPromisse();
  console.log(response);
}
