const colors  = ["pink", "green", "orange", "blue","red","purple","violet","skyblue"];
const bgcolor = document.querySelector("span");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
  const randomnum = getrandomnum();
  document.body.style.backgroundColor = colors[randomnum];
   btn.style.backgroundColor = colors[randomnum];
   bgcolor.textContent = colors[randomnum];
})


function getrandomnum() {
    return Math.floor(Math.random() * colors.length);
}

