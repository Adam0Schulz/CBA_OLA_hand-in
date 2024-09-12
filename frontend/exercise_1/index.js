const input = document.getElementById('input')
const incorrect = document.getElementById('incorrect')
const correct = document.getElementById('correct')
console.log('something')

input.addEventListener('change', (e) => {
    if (input.value === 'yes' || input.value == ' ') {
        correct.classList.add('display')
        incorrect.classList.remove('display')
    } else {
        incorrect.classList.add('display')
        correct.classList.remove('display')
    }
})