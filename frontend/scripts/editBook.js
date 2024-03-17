async function editBookEventListener(){
    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');
    // submit action 
    const submitBtn = document.getElementById('edit-book')
    submitBtn.addEventListener('click', async(event)=>{
        event.preventDefault();
        const title = document.getElementById('edit-book-title').value
        const summary = document.getElementById('edit-book-summary').value
        const msg = document.getElementById('error-message')
        msg.style.color = "red"

        if (title === '' || summary === ''){
            msg.innerText = "Please enter all the fields."
        }else{
            // fetch call
            await editBook(bookId, title, summary);
        }
    })

    // cancel action
    const cancelBtn = document.getElementById('cancel-book')
    cancelBtn.addEventListener('click', ()=>{
        window.location.href ='./index.html'
    })
}

window.onload = async()=>{
    await editBookEventListener()
}