// First, let's go through the basic process of creating and appending an element with vanilla JavaScript and jquery

// create a new div
const vanilla = document.createElement("div");


// Give your div some text
vanilla.textContent = "This is vanilla JS!"


// Give it a class of "box"
vanilla.classList.add("box");

// give it an id of "box-a"
vanilla.id = "box-a";



// append it to the DOM
const containerVanilla = document.querySelector("#vanilla-container");
containerVanilla.appendChild(vanilla);

// There are lot of ways to append things with jQuery! I personally like .appendTo() and .prependTo() a lot because they're nice when you want to chain jQuery methods.

// Now let's look at it all in one line



// Now let's put it together!
// Creating a Business Card
// When the user clicks a button, it should create a new business card

// First, target the button and add an event listener to it. The callback function should create a card with an h4 element for the person's name and two paragraph elements for the person's position and company.
// How would we do this with vanilla js?


// Next, target the inputs and add event listeners so that when the inputs change, the text on the card changes


// What if we wanted to put an event listener on something that we added dynamically with javascript?







// LIGHTNING CHALLENGE: 

// Add event listeners to the last input. When you enter text in the input, the text in the card should change.

// Add an event listener to the remove card button. When the button is clicked, the entire card should disappear. Experiment with the .hide() and .remove() methods. What's the difference between them? 














