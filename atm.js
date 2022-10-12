const feedback = document.querySelector(".button, .button2, .button3");
const form = document.querySelector(".scris");
const userPattern = /^[a-zA-Z]{6,12}$/;
const btn = document.createElement("button");
const container = document.querySelector(".container");
const h1 = document.querySelector(".h1");

let html = `<div class='valids'>
<button class= 'withdraw' ><a href='withdraw.html'>Withdraw</a></button>
  <button  class='deposit'><a href='deposit.html'>Deposit</a></button>
  <button class='transfer'><a href='transfer.html'>Transfer</a></button>
  </div>`;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.fid.value;

  if (userPattern.test(username)) {
    h1.textContent = "Transactions";
    form.style.display = "none";
    container.insertAdjacentHTML("beforeend", html);
  } else {
    h1.textContent = "";
    form.textContent = "Invalid ID, the ID must contain only letters ";
    container.insertAdjacentHTML(
      "beforeend",
      "<a href ='atm.html'><button class='test'>Go Back</button></a>"
    );
  }
});

form.fid.addEventListener("keyup", (e) => {
  console.log(e);
  if (userPattern.test(e.target.value)) {
    form.fid.setAttribute("class", "success");
  } else {
    form.fid.setAttribute("class", "error");
  }
});
