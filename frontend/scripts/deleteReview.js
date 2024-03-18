async function deleteReviewEventListener(){
    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');
    const id = url.get('review')
    // yes action 
    const yesBtn = document.getElementById('review-yes-btn')
    yesBtn.addEventListener('click', async(event)=>{
        event.preventDefault();
        // fetch call
        await deleteReview(id, bookId);
        window.location.href =`./book.html?book=${bookId}`
    })

    // no action
    const cancelBtn = document.getElementById('review-cancel-btn')
    cancelBtn.addEventListener('click', ()=>{
        window.location.href =`./book.html?book=${bookId}`
    })
}

window.onload = async()=>{
    await deleteReviewEventListener()
}