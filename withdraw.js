const withdraw = document.querySelector(".value");
const yourBalance = document.querySelector(".yourBalance");
const withdraw1 = document.querySelector(".value1");
const withdraw2 = document.querySelector(".value2");
const withdraw3 = document.querySelector(".value3");
const withdraw4 = document.querySelector(".value4");

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
