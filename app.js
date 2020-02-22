const menu = document.querySelector('.mobile-menu img')
const navbar = document.querySelector('nav ul')


window.onclick = function(event){
    if(event.target === menu){
        navbar.classList.toggle('nav-class')
        }else{
            navbar.classList.remove('nav-class')
        }
    
}
 
menu.addEventListener('click',(e)=>{
    navbar.classList.toggle('nav-class')
    if(e.target !== menu) navbar.classList.remove('nav-class')
})

