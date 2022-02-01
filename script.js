 let i = document.querySelectorAll('button');
let h1 = document.querySelector('#h1')
 function addred(){
    document.body.style.background=i[0].innerHTML
    h1.innerText='This is red color'
}
function addyellow(){
    document.body.style.background=i[1].innerHTML
    h1.innerText='This is yellow color'
}
function addgreen(){
    document.body.style.background=i[2].innerHTML
    h1.innerText='This is green color'
}
function addblue(){
    h1.innerText='This is blue color'
    document.body.style.background=i[3].innerHTML
}