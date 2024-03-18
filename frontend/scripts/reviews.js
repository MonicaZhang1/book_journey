/**
 * Create the review page 
 */

async function displayReviewsPage(){
    const reviewContainer = document.getElementById('review-container')
    document.getElementById('main-container').append(reviewContainer);

    // fetch call to get reviews 
    const reviews = await getAllReviews();

    if (reviews.length === 0) {
        msg = document.createElement('h2');
        msg.innerText = "No reviews added."
        document.getElementById('main-container').append(msg);
    }
    else {
        await displayAllReviews(reviews)
    }

}

/**
 * Helper function display one review at at time 
 * @param review object 
 */
async function displayReview(review) {
    // create new container with card class
    const container = document.createElement('div')
    container.classList.add('card')
    console.log(review.book_title)
    console.log(review.review)
    // create title and url link elements
    const title = document.createElement('p')
    title.className = 'card-title'
    title.innerText = review.book_title 

    const user_review = document.createElement('p')                                 
    user_review.className = 'card-review'
    user_review.innerText = review.review

    // add to container 
    container.append(title)
    container.append(user_review)
    // container.append(editReviewBtn)
    // container.append(deleteReviewBtn)
    document.getElementById('review-container').append(container)

    // when title is clicked, redirect to review's review page
    title.addEventListener('click', () => {
        window.location.href = `./book.html?book=${review.book_id}`;
    })
}

/**
 * Display all reviews 
 * @param reviews list of review object 
 */
async function displayAllReviews(reviews){
    for (review of reviews){
        displayReview(review)
    }
}


window.onload = async () => {
    await displayReviewsPage();
}