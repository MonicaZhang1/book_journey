/**
 * Create the book page (homepage)
 */
let id;

async function displayBooksPage(){
    console.log("displayBooksPage")
    const bookContainer = document.getElementById('book-container')
    
    // create a add btn, redirect if clicked
    const addBookBtn = await createBtn('btn btn-outline-primary', 'add-book-btn', 'Add')
    addBookBtn.addEventListener('click', ()=>{
        window.location.href = './addBook.html'
    })
    bookContainer.append(addBookBtn);
    document.getElementById('main-container').append(bookContainer);

    // fetch call to get books 
    const books = await getAllBooks();

    if (books.length === 0) {
        msg = document.createElement('h2');
        msg.innerText = "No books added."
        document.getElementById('main-container').append(msg);
    }
    else {
        await displayAllBooks(books)
    }

}

/**
 * Helper function display one book at at time 
 * @param book object 
 */
async function displayBook(book) {
    console.log("displayBook")
    // create new container with card class
    const container = document.createElement('div')
    container.classList.add('card')

    // create title and url link elements
    const title = document.createElement('p')
    title.className = 'card-title'
    title.innerText = book.title 

    const summary = document.createElement('p')                                 
    summary.className = 'card-url'
    summary.innerText = book.summary

    // add to container 
    container.append(title)
    container.append(summary)
    document.getElementById('book-container').append(container)

    // card clicked, redirect to book's review page
    container.addEventListener('click', () => {
        window.location.href = `./books.html?book=${book.id}`;
    })
}

/**
 * Display all books 
 * @param books list of book object 
 */
async function displayAllBooks(books){
    console.log("displayAllBooks")
    for (book of books){
        displayBook(book)
    }
}

// await displayBooksPage;

window.onload = async () => {
    console.log("displayBooksPage")
    await displayBooksPage();

    // // make sure user is logged in
    // id = sessionStorage.getItem("user_id");
    // if (id === null) {
    //     window.location.href = './login.html';
    // }
    // else {
    //     await displayBooksPage;
    // }
}