window.addEventListener("load", init);
const kepLista = ["kepek/kep11.jpg", "kepek/kep44.jpg", "kepek/kep22.jpg"];
function init(){
    const ARTICLEELEM = document.querySelectorAll("article"); 
    for (let index = 0; index < kepLista.length; index++){
        ARTICLEELEM[0].innerHTML += `<div><img src ='${kepLista[index]}' alt=''></div>`
    }
    const kisKepek = document.querySelectorAll("article div img");
    
    for (let index = 0; index < kisKepek.entries.length; index++){
        kisKepek[index].addEventListener("click", function(){
            const nagyKep = document.querySelectorAll("section div img");
            nagyKep[0].src = event.target.src;
        });
    }
    
}