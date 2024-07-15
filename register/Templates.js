export {participantTemplate, successTemplate}

let participantCount = 1;
function participantTemplate(count) {
    return `
        <section class="participant">
        <p>Participant ${count}</p>
        <div class="item">
        <label for="fname"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
        <label for="activity">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity" />
        </div>
        <div class="item">
        <label for="fee">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee" />
        </div>
        <div class="item">
        <label for="date">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date" />
        </div>
        <div class="item">
        <p>Grade</p>
        <select>
        <option selected value="" disabled selected></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
        </select>
        </div>
        </section>
    `;
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

function add_button_click(e) {
    console.log ("add button clicked");
    e.preventDefault();
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    addButton.insertAdjacentHTML('beforebegin', newParticipant);
}

function successTemplate() {
    const participantForm = document.getElementById("participant-form");
    const adultName = document.getElementById("adult_name").value;
    participantForm.style.display = "none";
    return `
    <div>
    <p>"Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees()} in Fees."</p>
    </div>
    `
}