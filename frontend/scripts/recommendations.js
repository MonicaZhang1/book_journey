/**
 * Create the review page 
 */

async function displayRecommendationsPage(){
    const recContainer = document.getElementById('review-container')
    const recommendations = await getRecsThriller();

    if (recommendations.length === 0) {
        msg = document.createElement('h2');
        msg.innerText = "No recommendations."
        document.getElementById('main-container').append(msg);
    }
    else {
        await displayAllRecommendations(recommendations)
    }

}

/**
 * Helper function display one review at at time 
 * @param review object 
 */
async function displayRecommendations(rec) {
    // create new container with card class
    const container = document.createElement('div')
    container.classList.add('card')

    // create title and url link elements
    const title = document.createElement('p')
    title.className = 'card-title'
    title.innerText = rec


    // add to container 
    container.append(title)
    document.getElementById('review-container').append(container)
}

/**
 * Display all reviews 
 * @param reviews list of review object 
 */
async function displayAllRecommendations(recommendations){
    for (rec of recommendations){
        displayRecommendations(rec)
    }
}

window.onload = async () => {
    await displayRecommendationsPage();
}
