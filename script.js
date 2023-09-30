const library = [];
const cardsContainer = document.querySelector('.book-display');
const form = document.getElementById('book-form');

function Book(title, author, pagesNb, readStatus) {
    this.title = title
    this.author = author
    this.pagesNb = pagesNb
    this.readStatus = readStatus
};

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
    console.log(library[i].readStatus);
    if (library[i].readStatus == "yes") {
        cardsContainer.insertAdjacentHTML ("beforeend", 
        `<div class="card" data-index-number="${i}">
        <span class="title">${library[i].title}</span>
        <span class="author">${library[i].author}</span>
        <span class="pages">${library[i].pagesNb}</span>
        <span class="status">${library[i].readStatus}</span>
        <div class="btn-container"><button type="button" class="change-status">Change status</button>
        <button type="button" class="remove">Remove Book</button></div></div>`)
    } else {
        cardsContainer.insertAdjacentHTML ("beforeend", 
        `<div class="card unread" data-index-number="${i}">
        <span class="title">${library[i].title}</span>
        <span class="author">${library[i].author}</span>
        <span class="pages">${library[i].pagesNb}</span>
        <span class="status">${library[i].readStatus}</span>
        <div class="btn-container"><button type="button" class="change-status">Change status</button>
        <button type="button" class="remove">Remove Book</button></div></div>`)
    }   
});

cardsContainer.addEventListener('click', function (e) { 
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
      };
});

cardsContainer.addEventListener('click', function (e) { 
    if (e.target.classList.contains('change-status')) {
        let selectedCard = e.target.parentElement.parentElement;
        let selectedStatus = selectedCard.querySelector('.status');

        if (selectedStatus.innerText == "Yes") {
            selectedStatus.innerText = "No";
            selectedCard.classList.add("unread");
        } else if (selectedStatus.innerText == "No") {
            selectedStatus.innerText = "Yes";
            selectedCard.classList.remove("unread");
        }
      };
});

