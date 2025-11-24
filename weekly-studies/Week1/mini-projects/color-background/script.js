const button = document.querySelector("#btn");
const hexPool = "0123456789ABCDEF"; /*16*/
console.log(button);

const randNum = function (max) {
  return Math.floor(Math.random() * max);
};
const randomHex = function () {
  let hex = "#";
  // console.log(hex);
  for (let i = 0; i < 6; i += 1) {
    hex += hexPool[randNum(16)];
  }
  console.log(hex);
  button.textContent = hex;
  return (document.body.style.backgroundColor = hex);
};

button.addEventListener("click", randomHex);
