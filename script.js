let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let bcc = document.getElementById("bcc");
let body = document.querySelector("body");
let color1 = "";
let color2 = "#006663";

btn1.addEventListener("click", () => {
  color1 = "#" + colorChange();
  bcc.innerText = `background-image: linear-gradient(to right bottom, ${color1}, ${color2});`;
  body.style.backgroundImage = `linear-gradient(to right bottom, ${color1}, ${color2})`;
  btn1.textContent = color1;
  btn1.style.backgroundColor = color1;
});
btn2.addEventListener("click", () => {
  color2 = "#" + colorChange();
  bcc.innerText = `background-image: linear-gradient(to right bottom, ${color1}, ${color2});`;
  body.style.backgroundImage = `linear-gradient(to right bottom, ${color1}, ${color2})`;
  btn2.textContent = color2;
  btn2.style.backgroundColor = color2;
});
bcc.addEventListener("click", () => {
    navigator.clipboard.writeText(bcc.textContent);
})
let colorChange = () => {
  let colorvlaues = "";
  let values = "0123456789abcdef";
  for (var i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    colorvlaues += values[random];
  }
  return colorvlaues;
};
