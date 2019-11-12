document.addEventListener('DOMContentLoaded', function(){ 
    const sections = document.querySelectorAll(".menu_trigger");
    const menu_links = document.querySelectorAll(".nav-link");
    const makeActive = (link) => menu_links[link].classList.add("actief");
    const removeActive = (link) => menu_links[link].classList.remove("actief");
    const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    const sectionMargin = 200;
    let currentActive = 0;
    
    window.addEventListener("scroll", () => {
  
        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 2

        if (current !== currentActive) {
          removeAllActive();
          currentActive = current;
          makeActive(current);
        }
      });
}, false);
