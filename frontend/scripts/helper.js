/**
 * Create a btn 
 * @param id
 * @param className
 * @param text btn innertext
 * @returns btn
 */

async function createBtn(id, className, text) {
    const btn = document.createElement('button')
    btn.innerText = text

    if (id !== null) {
        btn.id = id
    }
    if (className !== null){
        btn.className = className
    }
    return btn 
}