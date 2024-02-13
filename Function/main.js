// let confirmed = confirm("Areyour sure you want to do this?");
// console.log(confirmed);
// if (confirmed) {
//     console.log("Okay, here we go!");
// } else {
//     console.log("Alright, maybe later...")
// }


// // Define a Function 
// function displayGreeting() {
//   console.log('Hello.');
//   console.log('Have a good day!');
// }

// // Invoke Function 3 times
// displayGreeting();
// displayGreeting();
// displayGreeting();

// DEFINE A FUNCTION
 
// PARAMETERS ARE: name & timeOfDay 
function displayGreeting(name, timeOfDay) {
    console.log('Hello'  +  name +'.');
    console.log('Have a good' + timeOfDay + '!');
}

// INVOKE FUNCTION WITH DIFFERENT ARGUMENTS
displayGreeting( 'Megan', 'Morning');
// Arguments are 'Megan' & 'Morning'
// -> Hello Megan. Have a good Morning