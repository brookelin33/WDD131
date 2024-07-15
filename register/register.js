import {participantTemplate, successTemplate} from "./Templates.js";

let participantCount = 1;

function init() {
    document.getElementById("participant-info").innerHTML = participantTemplate(participantCount);
}
init();

const addButton = document.getElementById("add_button");
addButton.addEventListener("click", add_button_click);

function add_button_click(e) {
    console.log ("add button clicked");
    e.preventDefault();
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    addButton.insertAdjacentHTML('beforebegin', newParticipant);
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submit_button_click);

function submit_button_click(e) {
    console.log ("submit button clicked");
    e.preventDefault();
    const successHtml = successTemplate();
    document.getElementById("success-template-message").innerHTML = successHtml;
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, element) => {
        return sum + parseFloat(element.value) || 0;
    }, 0);
    // Return the total
    return total;
    console.log('Total Fees:', total);
}

