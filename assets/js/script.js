let see_more = document.getElementById("see-more");
let arrow_icon = document.getElementById("arrow-icon");
let no_show1 = document.getElementById("no-show1");
let no_show2 = document.getElementById("no-show2");
let no_show3 = document.getElementById("no-show3");
let no_show4 = document.getElementById("no-show4");

let hamburger = document.getElementById("hamburger");

let menu  = document.getElementById("menu");
let menu_list = document.getElementById("menu-list");
let item_1 = document.getElementById("item-1");
let item_2 = document.getElementById("item-2");
let item_3 = document.getElementById("item-3");

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}

const toggleMore = (e) =>{
    e.preventDefault();

    
    if (see_more.innerText == "See More") {
        see_more.innerHTML = "See Less <img id='arrow-icon' class='ArrowIcon Rotate' src='assets/images/arrow.svg' />"
    } else {
        see_more.innerHTML = "See More <img id='arrow-icon' class='ArrowIcon' src='assets/images/arrow.svg' />"
    }
    no_show1.classList.toggle("NoShow");
    no_show2.classList.toggle("NoShow");
    no_show3.classList.toggle("NoShow");
    no_show4.classList.toggle("NoShow");
}

const toggleMenu = (e) => {
    e.preventDefault();
    menu.classList.toggle("DownMenu")
    menu_list.classList.toggle("DownMenuList")
    item_1.classList.toggle("DownMenuItem")
    item_2.classList.toggle("DownMenuItem")
    item_3.classList.toggle("DownMenuItem")
}
const hideMenu = (e) => {
    e.preventDefault()
    if (window.innerWidth >= 480){
        menu.classList.remove("DownMenu")
        menu_list.classList.remove("DownMenuList")
        item_1.classList.remove("DownMenuItem")
        item_2.classList.remove("DownMenuItem")
        item_3.classList.remove("DownMenuItem")
    }
}



see_more.addEventListener('click', toggleMore);
hamburger.addEventListener('click', toggleMenu);
window.addEventListener('resize', hideMenu);


