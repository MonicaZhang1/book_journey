async function deleteBookEventListener(){
    // yes action 
    const yesBtn = document.getElementById('yes-btn')
    yesBtn.addEventListener('click', async(event)=>{
        event.preventDefault();
            // fetch call
            await deleteBook();
    })

    // no action
    const cancelBtn = document.getElementById('cancel-btn')
    cancelBtn.addEventListener('click', ()=>{
        window.location.href ='./index.html'
    })
}

window.onload = async()=>{
    await addBookEventListener()
}