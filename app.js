let p = fetch("https://type.fit/api/quotes");
p.then((value) => {
  return value.json();
}).then((result) => {
  let b = result;
  //   let a = Math.random(1643);
  b.forEach((element) => {
    //1643 this many quates are in their
    let a = Math.round(Math.random() * 1643);
    // console.log(element);
    // console.log(a);
    // if(a===b[].){

    // }
  });
  //   console.log(b);
});
let a = Math.random();
