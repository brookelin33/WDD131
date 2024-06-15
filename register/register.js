let participantCount = 1;
function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <label for="fname${count}">Participant ${count} Name:</label>
            <input type="text" id="fname${count}" name="fname${count}">
            <label for="activity${count}">Participant ${count} Age:</label>
            <input type="text" id="activity${count}" name="activity${count}">
            <label for="fee${count}">Fee:</label>
            <input type="text" id="fee${count}" name="fee${count}">
            <label for="date${count}">Date:</label>
            <input type="text" id="date${count}" name="date${count}">
        </section>
    `;
}

document.addEventListener('#add button', () => {
    const addButton = document.querySelector('#add-button');
    const participantFieldset = document.querySelector('#participants-fieldset');

    addButton.addEventListener('click', () => {
        participantCount++;
        const newParticipant = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipant);
    });

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, feeElement) => total + parseFloat(feeElement.value || 0), 0);
}

function successTemplate(info) {
    return `
        <p>Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registration-form');
    const summary = document.querySelector('#summary');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const total = totalFees();
        const adultName = form.querySelector('#adult-name').value;
        const participantCount = participantCount;

        form.style.display = 'none';
        summary.innerHTML = successTemplate({ name: adultName, participants: participantCount, fees: total });
        summary.style.display = 'block';
    });
});

});