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
            message.innerText = error;            //check if err ever go to this block
        }

    } catch (error) {
        message.innerText = error; 
    }
}