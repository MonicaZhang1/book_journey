async function deleteBookEventListener(){
    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');
    // yes action 
    const yesBtn = document.getElementById('yes-btn')
    yesBtn.addEventListener('click', async(event)=>{
        event.preventDefault();
        // fetch call
        await deleteBook(bookId);
        window.location.href ='./index.html'
    })

    // no action
    const cancelBtn = document.getElementById('cancel-btn')
    cancelBtn.addEventListener('click', ()=>{
        window.location.href ='./index.html'
    })
}

window.onload = async()=>{
    await deleteBookEventListener()
}