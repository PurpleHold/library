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

// function that will take user input and store new books 
// in the array
const form = document.getElementById('book-form');

let i = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());

    const book = new Book(formDataObj.title, formDataObj.author, formDataObj.pagesNb, formDataObj.readStatus);

    library.push(book);
    if (library.length == 1) {
        i = 0;
    }
    else {
        i = i+1;
    }

    cardsContainer.insertAdjacentHTML ("beforeend", 
    `<div class="card" data-index-number="${i}">
    <span class="title">${library[i].title}</span>
    <span class="author">${library[i].author}</span>
    <span class="pages">${library[i].pagesNb}</span>
    <span class="status">${library[i].readStatus}</span>
    <div class="btn-container"><button type="button" class="change-status">Change status</button>
    <button type="button" class="remove">Remove Book</button></div></div>`);
});

cardsContainer.addEventListener('click', function (e) { 
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
      };
});
/*
cardsContainer.addEventListener('click', function (e) { 
    if (e.target.classList.contains('change-status')) {
        const currentCard = e.target.parentElement.parentElement;
        let status = currentCard.lastChild.previousSibling.previousSibling.innerText;
        console.log(status);

        if (status == 'Yes') {
            status = 'No';
        }
        else {
            status = 'Yes';
        }
      };
});
*/

