//getting required elements...
var input = document.getElementsByTagName("input");
var addButton = document.getElementById("button-add");
var cancelButton = document.getElementById("button-cancel");
var errMsg = document.getElementsByTagName("err-msg");

// console.log(input)
// console.log(addButton)
// var err=[];

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  //checking conditions on each of input....
  for (var i = 0; i < input.length; i++) {
    if (input[i].value == null || input[i].value == "") {
      window.alert("Insert all Fields!!!");
      break;
    }
    if (
      input[i].value.startsWith("+") ||
      input[i].value.startsWith("-") ||
      input[i].value.startsWith("_")
    ) {
      window.alert("Cant start with + or - or _");
      break;
    }
    //credentials can have special char
    if (i != input.length - 2 && /[!@#$%^&*()]/.test(input[i].value)) {
      window.alert("Special char not allowed");
      break;
    }
    if (i < input.length - 1 && input[i].value.length < 5) {
      window.alert("Minimum Value required is atleast 5");
      break;
    }
    // only at last input it will show created if above conditions not matched
    if (i == input.length - 1) {
      window.alert("Created Successfully!!!");
      location.reload();
    }
  }
});

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  //reloading the page to clear out all the fields..
  location.reload();
});
