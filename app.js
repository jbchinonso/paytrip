const menu = document.querySelector('.mobile-menu img')
const navbar = document.querySelector('nav ul')

window.onclick = function(event){
    if(event.target == menu){
        if(navbar.style.display == 'none'){
            navbar.style.display = 'grid'
        }else{
            navbar.style.display = 'none'
        }
    }else{
        navbar.style.display = 'none'
    }
}

