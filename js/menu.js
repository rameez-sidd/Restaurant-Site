document.getElementById("menu-icon-container").addEventListener("click", openMenu);
function openMenu(){
    menu = document.getElementById("navbar-section");
    header = document.getElementById("mobile-header-section");
    iconContainer = document.getElementById("menu-icon-container");
    icon = document.getElementById("menu-icon");
    logo = document.getElementById("mobile-logo");
    body = document.getElementById("body-section");
    if (menu.style.top == "-400%") {
        menu.style.top = "59px";
        icon.setAttribute("class", "fa-solid fa-xmark"); 
        iconContainer.style.marginRight = "4px";
        body.style.overflow = "hidden";
        header.style.backgroundColor = "black";
        logo.style.visibility = "hidden";
    }
    
    else {
        menu.style.top = "-400%";
        body.style.overflow = "scroll";
        header.style.backgroundColor = "transparent";
        setTimeout(() => {   
            icon.setAttribute("class", "fa-solid fa-bars");
            iconContainer.style.marginRight = "0px";         
            logo.style.visibility = "visible";
        }, 450); 

    }
}

var navbarItems = document.getElementsByClassName("navbar-items");
for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener("click", function(){
        body.style.overflow = "scroll";
        header.style.backgroundColor = "transparent";
        menu.style.top = "-400%";
        icon.setAttribute("class", "fa-solid fa-bars");
        logo.style.visibility = "visible";
        iconContainer.style.marginRight = "0px";
    }, false);
}