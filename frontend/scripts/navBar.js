/**
 * Create hyper links
 */

function createNavLink(id, href, text){
    const navLink = document.createElement('a')
    navLink.className = ('nav-link')
    navLink.id = id
    navLink.href = href
    navLink.innerText = text
    navLink.style.color = '#CECFCD'

    return navLink
}

/**
 * Create a nav bar
 */
function createNavBar(){
    // create nav
    const navigation = document.createElement('nav')
    navigation.id = "navigation"
    navigation.className = "navbar navbar-expand-lg navbar-dark"

    // container for nav elements
    const navContainer = document.createElement('nav-container')
    navContainer.className = "container-fluid"

    //logo
    const navLogo = document.createElement('a')
    navLogo.className = 'navbar-brand'
    navLogo.href = "./index.html"
    navLogo.innerText = "Book Journey"

    navContainer.append(navLogo)

    // toggler help nav bar collapse/expand 
    const toggleBtn = document.createElement('button')
    toggleBtn.id = 'navbar-toggle-btn'
    toggleBtn.className='navbar-toggle'
    toggleBtn.type = 'button'

    // hamburger icon 
    const toggleIcon = document.createElement('span')
    toggleIcon.className = "navbar-toggle-icon"
    toggleBtn.append(toggleIcon)
    navContainer.append(toggleBtn)

    // container markup nav bar
    const navMarkup = document.createElement('div')
    navMarkup.id = 'navbarNavAltMarkup'
    navMarkup.className = 'collapse navbar-collapse'

    // toggle icon click/expand - add show to class. Vice versa
    toggleBtn.addEventListener('click', () =>{
        if (navMarkup.classList.contains('show')){
            navMarkup.classList.remove('show')
        }
        else{
            navMarkup.classList.add('show')
        }
    })

    // container for navLink
    const navLinkContainer = document.createElement('div')
    navLinkContainer.id = "nav-link-container"
    navLinkContainer.className = 'navbar-nav'
    navLinkContainer.append(createNavLink('home-nav', "./index.html", 'Home'))
    navLinkContainer.append(createNavLink('reviews-nav', './reviews.html', 'Reviews'))    
    navLinkContainer.append(createNavLink('help-nav', './help.html', 'Help'))    

    navMarkup.append(navLinkContainer)

    navContainer.append(navMarkup)
    navigation.append(navContainer)

    // navbar on top of body
    const body = document.getElementsByTagName("body")[0]
    body.prepend(navigation)

}

createNavBar()