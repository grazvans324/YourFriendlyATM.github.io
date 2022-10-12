const withdraw = document.querySelector(".value");
const yourBalance = document.querySelector(".yourBalance");
const withdraw1 = document.querySelector(".value1");
const withdraw2 = document.querySelector(".value2");
const withdraw3 = document.querySelector(".value3");
const withdraw4 = document.querySelector(".value4");
const text = document.querySelector(".text");
const text1 = document.querySelector(".text1");
const text22 = document.querySelector(".text22");
const text3 = document.querySelector(".text3");

withdraw.addEventListener("click", () => {
  yourBalance.innerHTML = parseInt(yourBalance.innerHTML, 10) - 100;
});

withdraw1.addEventListener("click", () => {
  yourBalance.innerHTML = parseInt(yourBalance.innerHTML, 10) - 200;
});

withdraw2.addEventListener("click", () => {
  yourBalance.innerHTML = parseInt(yourBalance.innerHTML, 10) - 500;
});

withdraw4.addEventListener("click", () => {
  yourBalance.innerHTML = parseInt(yourBalance.innerHTML, 10) - 1000;
});

withdraw.addEventListener("click", () => {
  text.style.display = "block";
  setTimeout(() => {
    text.style.display = "none";
  }, 600);
});

withdraw1.addEventListener("click", () => {
  text1.style.display = "block";
  setTimeout(() => {
    text1.style.display = "none";
  }, 600);
});

withdraw2.addEventListener("click", () => {
  text2.style.display = "block";
  setTimeout(() => {
    text2.style.display = "none";
  }, 600);
});

withdraw3.addEventListener("click", () => {
  text22.style.display = "block";
  setTimeout(() => {
    text22.style.display = "none";
  }, 600);
});

withdraw4.addEventListener("click", () => {
  text3.style.display = "block";
  setTimeout(() => {
    text3.style.display = "none";
  }, 600);
});
