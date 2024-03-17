async function editReviewEventListener(){
    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');
    const id = url.get('review')
    // submit action 
    const submitBtn = document.getElementById('submit-review')
    submitBtn.addEventListener('click', async(event)=>{
        event.preventDefault();
        const title = document.getElementById('edit-review-title').value
        const review = document.getElementById('edit-review').value
        const msg = document.getElementById('error-message')
        msg.style.color = "red"

        if (title === '' || review === ''){
            msg.innerText = "Please enter all the fields."
        }else{
            // fetch call
            await editReview(id, bookId, title, review);
        }
    })

    // cancel action
    const cancelBtn = document.getElementById('cancel-review')
    cancelBtn.addEventListener('click', ()=>{
        window.location.href =`./book.html?book=${bookId}`
    })
}

window.onload = async()=>{
    await editReviewEventListener()
}