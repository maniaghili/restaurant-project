let clic = document.querySelector('.btn_form')
let hanoz = document.querySelector('.hanoz')

clic.addEventListener('click',mani)

function mani(e){
    e.preventDefault()
    hanoz.style.display = 'inline'
}