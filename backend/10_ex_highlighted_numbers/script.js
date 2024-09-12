// Create a webpage that displays a list of numbers from 1 to 20. Each number should be
// displayed with a different color based on whether it’s even or odd. Clicking on a number
// should highlight it.
// Use the css classes (defined index.html) called number, even, odd and highlight to style
// it.


// Get the container element
const cont = document.getElementById('number-list');


// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Create a new div element for each number
    const div = document.createElement('div');
    div.className = 'number';
    div.innerText = i;
    // Check if the number is even or odd and apply the appropriate class
    if (i % 2 === 0) {
        div.classList.add('even');
    } else {
        div.classList.add('odd');
    }

    // Add an event listener to highlight the number when clicked

    div.setAttribute('tabindex', 0);
    div.addEventListener('focus', () => {

        // Remove highlight from all numbers
        // not needed when using focus
        // cont.children.array.forEach(element => {
        //     element.classList.remove('highlight'); 
        // });;

        // Add highlight to the clicked number
        div.classList.add('highlight');
    })
    div.addEventListener('blur', () => {
        div.classList.remove('highlight');
    })
    // Append the new div to the container
    cont.appendChild(div);
}

