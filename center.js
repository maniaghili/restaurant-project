console.log('salam')
new WOW().init();
let nn = navigator.language
console.log(nn);

fetch('https://bcdf-1017c-default-rtdb.firebaseio.com/',{
    method:'post',
    body : JSON.stringify(nn)
}).then(m=>console.log(m))