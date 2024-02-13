/**
 * Create the individual book page 
 */


async function displayBookPage(){
    const url = new URLSearchParams(window.location.search);
    const bookId = url.get('book');

    book = await getBook(bookId)

}



window.onload = async () => {
    await displayBookPage();
}