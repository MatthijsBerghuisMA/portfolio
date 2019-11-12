const nav = document.querySelector(".nav");
const sectionOne = document.querySelector(".menu_trigger");
const navObserver = new IntersectionObserver(updateNav, {rootMargin: "-80% 0px 0px 0px"});

function updateNav (entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            console.log("add");
            nav.classList.add("nav-scrolled");
        } else {
            console.log('remove');
            nav.classList.remove("nav-scrolled");
        }
    });
}

navObserver.observe(sectionOne);