let clic = document.querySelector('.btn_form')
let hanoz = document.querySelector('.hanoz')
let body = document.querySelector('body')
clic.addEventListener('click',mani)

function mani(e){
    e.preventDefault()
    hanoz.style.display = 'inline'
}