// <button class="red" id="blue">CLick me</button>


// step 1: select an element
// const button = document.querySelector('button')

// // step 2: listen to an event
// button.addEventListener('click', (event) => {
//   // step 3: change the DOM
//   event.currentTarget.classList.add('className')
// })

// Stimulus 
// 1 connect the controller 
// (add data-controller="controller-name" in the html element that contains all the interested elements, all targets and actions)

// 2 select elements: data-targets
// on the HTML element you want to target add: data-controller-name-target="nameOfElement"
// in stimulus controller add: static targets = ["nameOfElement"]
// call the element: this.nameOfElementTarget

// 3 Listen to an event: Data action
// HTML, add action to the element: data-action="click->disable-button#disable"
// in stimulus controller: define the action 
// disable() {
  // 4 change the DOM here
// }