async function addReviewEventListener(){

    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');

    // submit action 
    const submitBtn = document.getElementById('submit-review')
    submitBtn.addEventListener('click', async(event)=>{
        event.preventDefault();
        const title = document.getElementById('add-review-title').value
        const review = document.getElementById('add-review').value
        const msg = document.getElementById('error-message')
        msg.style.color = "red"

        if (title === '' || summary === ''){
            msg.innerText = "Please enter all the fields."
        }else{
            // fetch call
            await addReview(bookId, title, review);
        }
    })

    // cancel action
    const cancelBtn = document.getElementById('cancel-review')
    cancelBtn.addEventListener('click', ()=>{
        window.location.href =`./book.html?${bookId}`
    })
}

window.onload = async()=>{
    await addReviewEventListener()
}