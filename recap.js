// <button class="red" id="blue">CLick me</button>


// step 1: select an element
// const button = document.querySelector('button')

// // step 2: listen to an event
// button.addEventListener('click', (event) => {
//   // step 3: change the DOM
//   event.currentTarget.classList.add('className')
// })

// Stimulus 
// connect the controller 
// (add data-controller="controller-name" in the html element)

// select elements 
// on the HTML element add data-controller-name-target="nameOfTarget"
// in stimulus controller add static targets = ["button"]
// call the element this.nameOfTargetTarget

// Listen to an event: Data action
// data-action="click->disable-button#disable"