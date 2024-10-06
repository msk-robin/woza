const getElement = (selector) =>{
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(
        "Please double check the class name, there is no class"
    )
}

const links = getElement('.nav-links')
const navBtnDom = getElement('.nav-btn')

navBtnDom.addEventListener('click',()=>{
    links.classList.toggle('show-links')
})