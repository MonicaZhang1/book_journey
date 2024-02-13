async function addBookEventListener(){
    // submit action 
    const submitBtn = document.getElementById('submit-book')
    submitBtn.addEventListener('click', async(event)=>{
        event.preventDefault();
        const title = document.getElementById('add-book-title').value
        const summary = document.getElementById('add-book-summary').value
        const msg = document.getElementById('error-message')
        msg.style.color = "red"

        if (title === '' || summary === ''){
            msg.innerText = "Please enter all the fields."
        }else{
            // fetch call
            await addNewBook(title, summary);
        }
    })

    // cancel action
    const cancelBtn = document.getElementById('cancel-book')
    cancelBtn.addEventListener('click', ()=>{
        window.location.href ='./index.html'
    })
}

window.onload = async()=>{
    await addBookEventListener()
}