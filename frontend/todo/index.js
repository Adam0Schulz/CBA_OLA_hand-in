const list = document.getElementById('list')
const text = document.getElementById('text')
const add = document.getElementById('add')

function createListItem(text) {
    const li = document.createElement('li')
    const checkbox = document.createElement('input');
    const liText = document.createElement('p');
    liText.innerText = text
    checkbox.type = 'checkbox'
    li.appendChild(checkbox)
    li.appendChild(liText)

    return li
}

add.addEventListener('click', () => {
    const item = createListItem(text.value)
    list.appendChild(item)
})  