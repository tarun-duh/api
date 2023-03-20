function api() {
  let p = fetch("https://type.fit/api/quotes");
  p.then((value) => {
    return value.json();
  }).then((result) => {
    let b = result;
    let c = randomNum();
    // console.log(c);
    for (let i in b) {
      if (i == c) {
        // console.log(b[i]);
        update(b[i].author, b[i].text);
        setBg();
        // function update() {
        //   console.log(qoute);
        //   qoute.innerHTML("");
        // }
      }
    }
  });
}
let a = Math.random();
function randomNum() {
  let a = Math.round(Math.random() * 1643);
  //   console.log("hey");
  return a;
}
let b = randomNum();
let button = document.querySelector(".button");
let qoute = document.querySelector(".qoute");
let name = document.querySelector(".name");
let hover1 = document.querySelector(".hover1");

function update(name1, qoute1) {
  qoute.innerText = qoute1;
  name.innerText = name1 || "Unknown";
}
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  // button.style.backgroundColor = "#" + randomColor;
};
// setBg();

button.addEventListener("click", api);
