menu = document.querySelector('.imgResponsive'); 
accessList = document.querySelector('.accessList'); 

menu.addEventListener('click', ()=>{
    accessList.classList.toggle('active');  
    console.log("hola");
})