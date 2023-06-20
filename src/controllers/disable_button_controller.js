import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["button"]
  // connect() {
  //   console.log('connected!');
  // }

  disable(event) {
    // disables the Target button:
    this.buttonTarget.setAttribute("disabled", "")
    // disables the button where the event is:
    // event.currentTarget.setAttribute("disabled", "") 
  }
}
