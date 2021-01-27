/*
* This is script.js
* Author: Dang Le Hoang Duy
* Date create: 27/01/2021
*/

function showNav(){
    let menu_icon = document.getElementById('menu-icon');
    menu_icon.style.display = 'none';
    let close_icon = document.getElementById('close-icon');
    close_icon.style.display = 'block';
    let about = document.getElementById('about');
    about.style.float = 'none';
    let nav = document.getElementById('nav-bar');
    nav.className += ' responsive';
}

function hideNav(){
    let menu_icon = document.getElementById('menu-icon');
    menu_icon.style.display = 'block';
    let close_icon = document.getElementById('close-icon');
    close_icon.style.display = 'none';
    let about = document.getElementById('about');
    about.style.float = 'right';
    let nav = document.getElementById('nav-bar');
    nav.className = 'nav';
}