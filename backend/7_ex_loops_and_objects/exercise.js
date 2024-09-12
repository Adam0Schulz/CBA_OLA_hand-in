
// Create an array of book objects, with title and author (where both are strings).
// Create 5 objects in the array.
// ▪ Create an HTML page with a <ul>.
// ▪ Write javascript that loops over the array of book objects and create a new <li> for
// each book object and add the title and author to the <li> and insert it into the <ul>.
// ▪ Verify that it works with any number of objects by removing 2 of the 5 objects from
// the array and run it again.

const list = document.getElementById('list');

const books = [
    {
        author: 'Adam',
        title: 'the best book there is'
    },
    {
        author: 'Robert',
        title: 'the worst book there is'
    },
    {
        author: 'Daniel',
        title: 'the most okay book there is'
    },
    {
        author: 'Fernanda',
        title: 'some other book'
    },
    {
        author: 'Andrea',
        title: 'some book'
    }
]

for (let x of books) {
    const li = document.createElement('li');
    li.innerText = `Book's author: ${x.author}, Book's title: ${x.title}`;
    list.appendChild(li);
}




