let clic = document.querySelector('.btn_form')
var app = document.getElementById('app');

clic.addEventListener('click',mani)

function mani(e){
    e.preventDefault()

    var typewriter = new Typewriter(app, {
        loop: true
      });
      
      typewriter
        .typeString('هنوز بک اند سایت تکمیل نشده هفته بعد که تکمیل شد بیا ثبت نام کن😉')
        .pauseFor(300)
        .deleteChars(70)
        .typeString('حالا شاید هفته بعدم نشد 😂🤔')
        .pauseFor(1000)
        .deleteChars(40)
        .start();
    
}




