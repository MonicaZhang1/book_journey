/**
 * Create the individual book page 
 */


async function displayBookPage(){
    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');

    book = await getBook(bookId)

    // create new container with card class
    const container = document.createElement('div')
    container.classList.add('card')

    // create title and url link elements
    const title = document.createElement('p')
    title.className = 'card-title'
    title.innerText = book.title 

    const addReviewBtn = await createBtn('add-review-btn', 'btn btn-outline-primary','Add')
    addReviewBtn.addEventListener('click', ()=>{
        window.location.href = `./addReview.html?book=${bookId}`
    })
    // container.append(addReviewBtn);
    document.getElementById('book-review-container').append(addReviewBtn)

    // add to container 
    container.append(title)

    document.getElementById('book-container').append(container)

}

/**
 * Create the review part of page
 */

async function displayReviewPage(){
    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');

    review = await getReview(bookId)

    // create new container with card class
    const container = document.createElement('div')
    container.classList.add('card')

    // create review element
    const user_review = document.createElement('p')
    user_review.className = 'card-review'
    user_review.innerText = review.review 

    const editReviewBtn = await createBtn('edit-review-btn','btn btn-outline-secondary', 'Edit')
    editReviewBtn.addEventListener('click', ()=>{
        window.location.href = `./editReview.html?book=${bookId}&review=${review.id}`
    })

    const deleteReviewBtn = await createBtn('delete-review-btn','btn btn-outline-danger', 'Delete')
    deleteReviewBtn.addEventListener('click', ()=>{
        window.location.href = `./deleteReview.html?book=${bookId}&review=${review.id}`
    })

    // add to container 
    container.append(user_review)
    container.append(editReviewBtn)
    container.append(deleteReviewBtn)
    document.getElementById('book-review-container').append(container)
}


window.onload = async () => {
    await displayBookPage();
    await displayReviewPage();
}