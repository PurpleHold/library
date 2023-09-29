// array to store book objects
const library = [];
// html container for stored books
const cardsContainer = document.querySelector('.book-display');

/*const newCard = `<div class="card"><span class="title">${library[i].title}</span>
<span class="author">${book.author}</span>
<span class="pages">${book.pagesNb}</span>
<span class="status">${book.readStatus}</span></div>`;*/

// book object constructor
function Book(title, author, pagesNb, readStatus) {
    this.title = title
    this.author = author
    this.pagesNb = pagesNb
    this.readStatus = readStatus
};

// function that loops through the array and for each item
// displays it in the HTML (cards / table)
function displayBook() {
    library.forEach((bookStored) => {

    });
}

// function that will take user input and store new books 
// in the array
const form = document.getElementById('book-form');

let i = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj);

    const book = new Book(formDataObj.title, formDataObj.author, formDataObj.pagesNb, formDataObj.readStatus);
    console.log(book);

    library.push(book);
    console.log(library);

    if (library.length == 1) {
        i = 0;
    }
    else {
        i = i+1;
    }

    cardsContainer.insertAdjacentHTML ("beforeend", 
    `<div class="card"><span class="title">${library[i].title}</span>
    <span class="author">${library[i].author}</span>
    <span class="pages">${library[i].pagesNb}</span>
    <span class="status">${library[i].readStatus}</span></div>`);
});




