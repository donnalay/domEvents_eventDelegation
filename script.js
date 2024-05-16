//when clicking submit, add text from input into list
//prevent page from re-loading

const form = document.querySelector('form[id="wallofFameForm"]');
const input = document.querySelector('input[id="catName"]');
const input2 = document.querySelector('textarea[id="description"]');
const list = document.querySelector('ul[id="list"]');
const error = document.querySelector('p[id="error"]');

const submitButton = document.querySelector('button[id="submit"]');
const catWallEmpty = document.querySelector('p[id="wallEmpty"]');

form.addEventListener("submit", function (e) {
  if (input.value === "" || input.value === " ") {
    e.preventDefault();
    error.style.display = "block";
    error.classList.add("shake");
  } else {
    //prevent form refresh
    e.preventDefault();
    //remove error if present
    error.style.display = "none";
    catWallEmpty.style.display = "none";
    //store cat name - text value from input
    const catName = input.value;
    const titleCaseCatName =
      catName[0].toUpperCase() + catName.slice(1, catName.length).toLowerCase();
    //print out cat name value
    console.log(`cat name: ${catName}`);
    //generate li element
    const newLi = document.createElement("li");
    //generate delete btn
    const newButton = document.createElement("button");
    newButton.setAttribute("id", "delete");
    newButton.textContent = "Remeowve from wall of fame 😿";
    //add id to newLI
    newLi.setAttribute("id", "newLi");
    //update li text to user input text
    newLi.innerText = "🐈 " + titleCaseCatName;
    //add new li to list
    list.append(newLi);
    const catDescription = input2.value;
    if (catDescription !== "") {
      console.log(`description: ${catDescription}`);
      const newP = document.createElement("p");
      newP.innerText = catDescription;
      newLi.append(newP);
    }
    newLi.append(newButton);
    //reset form inputs
    input.value = "";
    input2.value = "";
  }
});

list.addEventListener("click", function (e) {
  console.log("delete list item");
  //need to target parent node; since clicking on delete should remove the parent element
  e.target.nodeName === "BUTTON" && e.target.parentNode.remove();
  if (list.children.length === 0) {
    catWallEmpty.style.display = "block";
  }
});

//User must enter a cat name, otherwise error message is displayed
//added character to the error message!
//error message disappears on successful submit
//cat wall of fame displays empty state message
//when item added to cat wall of fame, empty state message hidden
//when user types in text to inputs and submits, text is displayed on cat wall of fame as list item.
//displayed items have an option to remove them
//if the wall of fame list is < 0, empty state message returns
//on submit, inputs are cleared.
