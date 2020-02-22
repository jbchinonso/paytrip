const menu = document.querySelector('.mobile-menu img')
const navbar = document.querySelector('nav ul')

menu.addEventListener('click',(e)=>{
    navbar.classList.toggle('nav-class')
    if(e.target !== menu) navbar.className = ""
})

window.onclick = function(e){
    if(e.target !== menu) navbar.className = ""
    
}
 


