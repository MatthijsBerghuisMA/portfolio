let nav_toggle = document.querySelector('#nav-toggle');
let nav_links = document.querySelectorAll('.nav-links-container > a');


nav_links.forEach(element => {
    element.addEventListener('click', function () {
        if (nav_toggle.checked) nav_toggle.checked = false;
    });
});