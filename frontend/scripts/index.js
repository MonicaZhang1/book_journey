/**
 * Create the book page (homepage)
 */

async function displayBooksPage(){
    const bookContainer = document.getElementById('book-container')
    
    // create a add btn, redirect if clicked
    const addBookBtn = await createBtn('add-book-btn','btn btn-outline-primary', 'Add')
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

    // edit functionality
    const editBookBtn = await createBtn('edit-book-btn','btn btn-outline-secondary', 'Edit')
    editBookBtn.addEventListener('click', ()=>{
        window.location.href = `./editBook.html?book=${book.id}`
    })

    // delete functionality 
    const deleteBookBtn = await createBtn('delete-book-btn','btn btn-outline-danger', 'Delete')
    deleteBookBtn.addEventListener('click', ()=>{
        window.location.href = `./deleteBook.html?book=${book.id}`
    })

    // add to container 
    container.append(title)
    container.append(summary)
    container.append(editBookBtn)
    container.append(deleteBookBtn)
    document.getElementById('book-container').append(container)

    // when title is clicked, redirect to book's review page
    title.addEventListener('click', () => {
        window.location.href = `./book.html?book=${book.id}`;
    })
    
}

/**
 * Display all books 
 * @param books list of book object 
 */
async function displayAllBooks(books){
    for (book of books){
        displayBook(book)
    }
}


window.onload = async () => {
    await displayBooksPage();
}