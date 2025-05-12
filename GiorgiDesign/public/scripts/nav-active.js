document.addEventListener("DOMContentLoaded",  () => { 
    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll("nav a");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = document.querySelector(`nav a[data-link="${id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(a => {
                    if (!a.dataset.link) return;
                    a.classList.remove("underline");
                    a.classList.remove("text-pink-500");
                } );
                if (link) {
                    link.classList.add("underline");
                    link.classList.add("text-pink-500");
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