let togle = document.getElementById('togle')
let sideMenu = document.getElementById('sidemenu')

togle.addEventListener('click', function(event){
    sideMenu.classList.toggle('move_out')
})
