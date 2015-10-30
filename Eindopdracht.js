
// Selecteren van de fieldset van stage
var stageVeld = document.querySelector('form > fieldset:nth-of-type(4)');

// Selecteren van de fieldset van project
var projectVeld = document.querySelector('form > fieldset:nth-of-type(3)');

//Selecteren van de radiobutton van project
var radioProject = document.querySelector('form > fieldset:nth-of-type(2) > label > input[type="radio"]');

//Selecteren van de radiobutton van stage
var radioStage = document.querySelector('form > fieldset:nth-of-type(2) > label:nth-of-type(2)');

// EventListener, bij onclick op radiobutton functie myFunction() aanroepen
radioProject.addEventListener('click', function() {
        stageVeld.classList.add('verberg');
        projectVeld.classList.remove('verberg');
    } );

// EventListener, bij onclick op radiobutton functie myFunction() aanroepen
radioStage.addEventListener('click', function() {
        projectVeld.classList.add('verberg');
        stageVeld.classList.remove('verberg');
    } );






//function test {
 //   document.querySelectorAll("submit-for").onclick {
//document.querySelector("form > fieldset:nth-of-type(3)").classList.add("is-//visible");
//}
//}

//console.log("test");

//function myFunction() {
 //   document.getElementById("project").classList.add("toon");
 //   console.log("test");
//}

//myFunction();

//console.log("test2");

//var testfunctie = function test() {
  // console.log("goed");
//}


//function test() {
//    document.getElementById("project").classList.toggle("toon");
//}

//document.getElementById("radiobuttonproject").addEventListener("onclick", test());


//var radio = document.getElementById("radiobuttonproject");
//radio.addEventListener("RadioStateChange", myFunction());






