let hamburgerMenu = document.querySelector(".ham");
let navigationBar = document.querySelector("nav");
let cancelButton = document.querySelector(".hamCancel");


hamburgerMenu.addEventListener('click', function(){
    
    navigationBar.classList.add("navDisplay");
    cancelButton.classList.add("navDisplay");
});

cancelButton.addEventListener("click", function(){
    
    navigationBar.classList.remove("navDisplay");
    cancelButton.classList.remove("navDisplay");
});
