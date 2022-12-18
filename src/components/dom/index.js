//How to Select Elements in the DOM

//getElementById
// const masterEl = document.getElementById("master");
// console.log(masterEl);

//getElementsByClassName
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function master() {
//   var master = document.getElementsByClassName("master2");
//   master[2].innerHTML = "i need a job";
// });

//getElementsByTagName
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function master() {
//   let master = document.getElementsByTagName("p");
//   let masterEl = (master[1].innerHTML = "Code editors");
//   console.log(masterEl); //Code editors
// });

//querySelector
// const master = document.querySelector("#master");
// console.log(master);

//querySelectorAll
// const master = document.querySelectorAll(".master");
// console.log(master[1]);

// const parent = document.getElementById("parent").lastElementChild;
// console.log(parent); //<p>i am the last child</p>

// const parent2 = document.getElementById("parent").children[3];
// console.log(parent2); //<h1>hello world</h1>

// const secondchild = document.getElementById("secondchild");
// console.log(secondchild); //<p id="secondchild">i am the second child</p>

// console.log(secondchild.parentNode); //<div id="parent">...</div>

// console.log(secondchild.nextElementSibling); //<h4>i am alive</h4>

// console.log(secondchild.previousElementSibling); //<div id="firstchild">i am a first child</div>

// How to Create Elements
// const createEl = document.createElement("div");
// console.log(createEl); //<div></div>

//How to Set innerHTML
// const innerhtml = (createEl.innerHTML = "i am a frontend developer");
// console.log(createEl);

//How to Append an Element
// const createEl1 = document.createElement("div");
// const innerhtml1 = (createEl1.innerHTML = "i am a frontend developer1");

// const parentEl = document.getElementById("parent");
// parentEl.appendChild(createEl1);
// console.log(parentEl);

//How to Insert One Element Before Another

// const parentEl = document.getElementById("parent");
// const firstchildEl = document.getElementById("firstchild");

// const createEl = document.createElement("div");
// const innerhtml = (createEl.innerHTML = "i am a frontend developer1");

// parentEl.insertBefore(createEl, firstchildEl);
// console.log(parentEl);

//How to Replace a Child Element
// const firstchildEl = document.getElementById("firstchild");
// const parentEl = document.getElementById("parent");

// const createEl = document.createElement("div");
// const innerhtml = (createEl.innerHTML = "i am a frontend developer");

// parentEl.replaceChild(createEl, firstchildEl);
// console.log(parentEl);

// const firstchildEl = document.getElementById("firstchild");
// const parentEl = document.getElementById("parent");
// parentEl.removeChild(firstchildEl);
// console.log(parentEl);

//How to Add a CSS Class
// const buttonEl = document.getElementById("master");
// buttonEl.addEventListener("click", addFunction);

// function addFunction() {
//   buttonEl.classList.add("button");
// }

//How to Remove a Class
// const buttonEl = document.getElementById("master");
// buttonEl.addEventListener("click", addFunction);

// function addFunction() {
//   buttonEl.classList.remove("button");
// }

//How to Toggle a Class
const buttonEl = document.getElementById("master");
buttonEl.addEventListener("click", addFunction);

function addFunction() {
  buttonEl.classList.toggle("button");
}
