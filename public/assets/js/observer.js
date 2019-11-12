const nav = document.querySelector(".nav");
const Top = document.querySelector(".top");
const sectionOne = document.querySelector(".menu_trigger");
const navObserver = new IntersectionObserver(updateNav, {
    rootMargin: "-80% 0px 0px 0px"
});
const topObserver = new IntersectionObserver(updateTop, {
    rootMargin: "100px 0px 0px 0px"
});

function updateNav(entries) {
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

function updateTop(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            console.log("add");
            Top.classList.add("show");
        } else {
            console.log('remove');
            Top.classList.remove("show");
        }
    });
}

navObserver.observe(sectionOne);
topObserver.observe(sectionOne);