function Menu() {
    const navLink = document.getElementById('nav-links');
    (navLink.style.right == "-200px") ? navLink.style.right = "0" : navLink.style.right = "-200px";
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        var scroll = (pageYOffset > 400) ? true : false;
        const menu = document.getElementById('menu');
        (scroll) ? menu.classList.add('menu') : menu.classList.remove('menu')
    })
})
