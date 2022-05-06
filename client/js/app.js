// ********************************************
// PP FLOW
// index
function getAllPp() {
  fetch("http://localhost:3000/pp")
    .then((r) => r.json())
    .then(appendPps)
    .catch(console.warn); // ??
}

// create
function submitPp(e) {
  e.preventDefault();

  let rnd = Math.round(Math.random());
  let rndPp = "";

  switch (rnd) {
    case 0:
        rndPp = "potato";
      break;
    case 1:
        rndPp = "pepsi";
      break;
  }

  console.log(rnd)
  console.log(rndPp)
  const ppData = {
    name: rndPp
  };

  const options = {
    method: "POST",
    body: JSON.stringify(ppData),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:3000/pp", options)
    .then((r) => r.json())
    .then(appendPp)
    .catch(console.warn);
}

// helpers
function appendPps(pps) {
  pps.forEach(appendPp);
}

function appendPp(ppData) {
  const newDiv = document.createElement("div");
  const ppSection = document.querySelector(".ppOutput")
  console.log("appending...",ppData.name)
  switch (ppData.name) {
    case "potato":
        newDiv.classList.add("potato")
      break;
    case "pepsi":
        newDiv.classList.add("pepsi")
      break;
  }
  newDiv.classList.add("potato")
  ppSection.appendChild(newDiv)    
}

// ********************************************

module.exports = {
    getAllPp,
    submitPp,
    appendPps,
    appendPp
};


// // ********************************************
// // CATS FLOW
// // index
// function getAllCats() {
//   fetch("http://localhost:3000/cats")
//     .then((r) => r.json())
//     .then(appendCats)
//     .catch(console.warn);
// }

// // create
// function submitCat(e) {
//   e.preventDefault();

//   const catData = {
//     name: e.target.name.value,
//     age: e.target.age.value,
//   };

//   const options = {
//     method: "POST",
//     body: JSON.stringify(catData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   fetch("http://localhost:3000/cats", options)
//     .then((r) => r.json())
//     .then(appendCat)
//     .catch(console.warn);
// }

// // helpers
// function appendCats(cats) {
//   cats.forEach(appendCat);
// }

// function appendCat(catData) {
//   const newLi = document.createElement("li");
//   newLi.textContent = `Name: ${catData.name} || Age: ${catData.age}`;
//   const catsList = document.querySelector("ul");
//   catsList.append(newLi);
// }

// // ********************************************

// // MESSAGE FLOW
// function getMessage() {
//   fetch("http://localhost:3000")
//     .then((r) => r.text())
//     .then(renderMessage)
//     .catch(console.warn);
// }

// function renderMessage(msgText) {
//   const msg = document.createElement("p");
//   msg.textContent = msgText;
//   msg.style.color = "red";
//   document.body.append(msg);
// }

// // ********************************************

// module.exports = {
//   getAllCats,
//   submitCat,
//   appendCats,
//   appendCat,
//   getMessage,
//   renderMessage,
// };
