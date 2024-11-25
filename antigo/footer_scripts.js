function scrollToSection(event) {
    event.preventDefault();
    const id = event.target.getAttribute('href');
    const distaceFromTheTop = document.getElementById(id).offsetTop;

    window.scroll({
        top: distaceFromTheTop,
        behavior: 'smooth'
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const footerLinks = document.querySelectorAll("footer .menu a");
    footerLinks.forEach(footerLink => {
        footerLink.addEventListener("click", scrollToSection);
    });
});
