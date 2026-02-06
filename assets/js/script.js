// 1. use document.getElementById to select the searchTerm Button
var searchTerm = document.getElementById("searchTerm");

// 2. use document.getElementById to select the searchButton Button
var searchButton = document.getElementById("searchButton");

// 3. add an event listener to the searchButton that calls the search function when clicked
searchButton.addEventListener("click", onClickSearhButton);

const warning = document.getElementById("warning");


const listOfSearches  = []; //creating an empty array to store searches

var list = document.getElementById('searches');

var searchWarning = false;
//  List<string> test = new List<string>();

// const inputBtn = document.getElementById("searchButton");
// const inputEl = document.getElementById("searchTerm");

// function getInputVal() 
// {
//   console.log(inputEl.value);
// }

// inputBtn.addEventListener("click", getInputVal);



function onClickSearhButton() {
  // 4. use the value property of the searchInput to get the search term
  //1. **Read the search text** from an input field on the page.
  var searchOutput = searchTerm.value;
  // console.log(searchTerm.value);
  console.log(searchOutput);

  //2. **Validate** that text has been entered (non-empty).
  if (searchOutput == "") {
    alert("Please enter a search term");
   
    return;
  }

  if (listOfSearches.includes(searchOutput)) {
    if (searchWarning == false) {
      warning.style.display = "flex"
       searchWarning = true;
          return;
    }
    else if (searchWarning == true) {
      warning.style.display = "none"
      searchWarning = false;
    }
 
  }

    //3. Add the valid search text to a **list of searches** displayed on the page.
    listOfSearches.push(searchOutput);
    refreshUI(searchOutput);
    
    listOfSearches.forEach((element) => 
      { 
        
       // console.log(element); 

      });

  




  //TODO:
  // 5. select the searches div using document.getElementById
  //TODO:
  // 6. create a new li element using document.createElement
  //TODO:
  // 7. set the innerHTML of the new paragraph to the search term
  //TODO:
  // 8. append the new paragraph to the searches div
  //TODO:
}

function refreshUI(searches) {


  console.log(searches);
  var ulEl = document.createElement('li');
  ulEl.appendChild(document.createTextNode(searches));
  list.appendChild(ulEl);

}
