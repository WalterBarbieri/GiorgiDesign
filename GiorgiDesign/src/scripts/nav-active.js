document.addEventListener("DOMContentLoaded",  () => { 
    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll("nav a");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = document.querySelector(`nav a[data-link="${id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(a => a.classList.remove("underline"));
                if (link) {
                    link.classList.add("underline");
                }
            }
        })
    },
{
    root: null,
    threshold: 0.6,
});
    sections.forEach((section) => observer.observe(section));
});