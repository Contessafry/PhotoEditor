function getRandomImg() {
  document.getElementById(
    "display"
  ).src = `https://source.unsplash.com/random/${Math.random()}`;
}

const seppia = document.getElementById("seppia");
const satura = document.getElementById("satura");
const contrast = document.getElementById("contrasto");
const blur = document.getElementById("blur");
const ombra = document.getElementById("ombra");

seppia.addEventListener("input", () => {
  document.getElementById("display").style.filter = `sepia(${seppia.value})`;
  console.log(seppia.value);
});

satura.addEventListener("input", () => {
  document.getElementById("display").style.filter = `saturate(${satura.value})`;
  console.log(satura.value);
});
contrast.addEventListener("input", () => {
  document.getElementById(
    "display"
  ).style.filter = `contrast(${contrast.value})`;
  console.log(contrast.value);
});
blur.addEventListener("input", () => {
  document.getElementById("display").style.filter = `blur(${blur.value}px)`;
  console.log(blur.value);
});
ombra.addEventListener("input", () => {
  document.getElementById(
    "display"
  ).style.filter = ` brightness(${ombra.value})`;
  console.log(ombra.value);
});
