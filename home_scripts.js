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
    const imgFundoEstrela = document.querySelector("#home .bgstar");
    const menuTopo = document.querySelector("#home .menu");
    const euInicio = document.querySelector("#home .eu");

    document.addEventListener("scroll", () => {
        let backgroundPosition = 300 + parseFloat(`${window.scrollY * 0.3}`);
        if (window.innerWidth > 699) imgFundoEstrela.style.backgroundPosition = `-${backgroundPosition}px`;
        let opacityEu = 1 - parseFloat(`${window.scrollY/250}`);

        if (window.pageYOffset >= 80) {
            if (window.innerWidth > 650)

            menuTopo.style.position = "fixed";
            menuTopo.style.top = "0px";
        } else {
            menuTopo.style.position = "absolute";
            menuTopo.style.top = "80px";
        };

        euInicio.style.animation = "none";
        euInicio.style.opacity = opacityEu;

        if (window.scrollY > 250) {
            euInicio.style.display = "none";
        } else {
            euInicio.style.display = "flex";
        }
    });

    const arrowDown = document.querySelector("#home .arrow");
    arrowDown.addEventListener('click', () => {
        window.scroll({
            top: document.getElementById("quem_sou").offsetTop,
            behavior: 'smooth'
        });
    });

    const menuLinks = document.querySelectorAll("#home .menu");
    menuLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    const linksRedesSociais = document.querySelectorAll("#home .redes_sociais a");
    var linkIndex = -10;
    var intervalAparecerLink = setInterval(() => {
        try {
            linksRedesSociais[linkIndex].style.animationName = "linkRedesSociaisAparecer";
        } catch(e) {}
        linkIndex++;
        if (linkIndex >= 3) {
            clearInterval(intervalAparecerLink);
        }
    }, 200);

    const menuMobileButtonClose = document.querySelector('#home .menu_mobile .button .close');
    const menuMobileButtonOpen = document.querySelector("#home .menu_mobile .button .open");
    const menuMobileShowLinks = document.querySelector("#home .menu_mobile .show_menu");
    const allLinksMenuMobile = document.querySelectorAll('#home .menu_mobile .show_menu');

    allLinksMenuMobile.forEach(link => {
        link.addEventListener('click', scrollToSection);
        link.addEventListener('click', () => {
            menuMobileShowLinks.style.display = 'none';
            menuMobileButtonOpen.style.display = "block";
            menuMobileButtonClose.style.display = "none";
        });
    });

    menuMobileButtonOpen.addEventListener("click", () => {
        menuMobileShowLinks.style.display = 'flex';
        menuMobileButtonOpen.style.display = "none";
        menuMobileButtonClose.style.display = "block";

        menuMobileButtonClose.addEventListener('click', () => {
            menuMobileShowLinks.style.display = 'none';
            menuMobileButtonOpen.style.display = "block";
            menuMobileButtonClose.style.display = "none";
        })
    })
});