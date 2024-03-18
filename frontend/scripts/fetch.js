/**
 * Get all books from db  
 * @returns list of books data/object
 */
async function getAllBooks(){
    try {
        const url = `http://127.0.0.1:8000/books`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;           
        }

    } catch (error) {
        message.innerText = "No books found."; 
    }
}

/**
 * Add a new book to db 
 * @returns new book data/object
 */
async function addBook(title, summary){
    try {
        const body = {
            title: title,
            summary: summary
        }
        const url = `http://127.0.0.1:8000/books`
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        const result = await res.json();
     
        if (res.status === 201) {
            window.location.href = `./index.html`
        }
        else{
            message.innerText = error;          
        }

    } catch (error) {
        document.getElementById('error-message').innerText = "There was a problem adding the book."
    }
}

/**
 * Edit a new book in db 
 */
async function editBook(id, title, summary){
    try {
        const body = {
            title: title,
            summary: summary
        }
        const url = `http://127.0.0.1:8000/books/${id}`
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        const result = await res.json();
     
        if (res.status === 200) {
            window.location.href = `./index.html`
        }
        else{
            message.innerText = error;           
        }

    } catch (error) {
        document.getElementById('error-message').innerText = "There was a problem editing the book."
    }
}


/**
 * Delete book 
 */
async function deleteBook(id){
    try {
        const url = `http://127.0.0.1:8000/books/${id}`
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;           
        }

    } catch (error) {
        message.innerText = "There was an error deleting the book."; 
    }
}

/**
 * GET a book 

 */
async function getBook(id){
    try {
        const url = `http://127.0.0.1:8000/books/${id}`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;         
        }

    } catch (error) {
        message.innerText = "No book found."; 
    }
}

/**
 * Get all reviews from db  
 * @returns list of reviews data/object
 */
async function getAllReviews(){
    try {
        const url = `http://127.0.0.1:8000/reviews`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;            
        }

    } catch (error) {
        message.innerText = "No reviews found."; 
    }
}

async function getReview(book_id){
    try {
        const url = `http://127.0.0.1:8000/reviews/book/${book_id}`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;            
        }

    } catch (error) {
        message.innerText = "No reviews found."; 
    }
}

/**
 * Add a new Review to db 
 * @returns new Review data/object
 */
async function addReview(book_id, book_title, review){
    try {
        const body = {
            book_id: book_id,
            book_title: book_title,
            review: review
        }
        const url = `http://127.0.0.1:8000/reviews`
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        const result = await res.json();
     
        if (res.status === 201) {
            window.location.href = `./book.html?book=${book_id}`
        }
        else{
            message.innerText = error;          
        }

    } catch (error) {
        document.getElementById('error-message').innerText = "There was a problem adding the review."
    }
}

/**
 * Edit a new review in db 
 */
async function editReview(id, book_id, book_title, review){
    try {
        const body = {
            book_id: book_id,
            book_title: book_title,
            review: review
        }
        const url = `http://127.0.0.1:8000/reviews/${id}`
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        const result = await res.json();
     
        if (res.status === 200) {
            window.location.href = `./book.html?book=${book_id}`
        }
        else{
            message.innerText = error;           
        }

    } catch (error) {
        document.getElementById('error-message').innerText = "There was a problem editing the review."
    }
}

/**
 * Delete a review in db 
 */
async function deleteReview(id, book_id){
    try {
        const url = `http://127.0.0.1:8000/reviews/${id}`
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
        const result = await res.json();
     
        if (res.status === 200) {
            window.location.href = `./book.html?book=${book_id}`
        }
        else{
            message.innerText = error;           
        }

    } catch (error) {
        document.getElementById('error-message').innerText = "There was a problem deleting the review."
    }
}

// GET genre recs
async function getRecommendations(genre){
    try {
        const url = `http://127.0.0.1:5000/genre/${genre}`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                // "Content-Type: text/html"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;            
        }

    } catch (error) {
        message.innerText = "Error getting the recommendations."; 
    }
}

// GET Thriller recommendations
async function getRecsThriller(){
    try {
        const url = `http://127.0.0.1:5000/genre/thrillers`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;          
        }

    } catch (error) {
        message.innerText = "There was an error getting the recommendations."; 
    }
}