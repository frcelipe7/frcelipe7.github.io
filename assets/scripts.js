document.addEventListener("DOMContentLoaded", () => {
    var pt, en;
    fetch("assets/json/pt.json")
    .then(response => response.json())
    .then(data => {
        pt = data;
    });

    fetch("assets/json/en.json")
    .then(response => response.json())
    .then(data => {
        en = data;
    });

    const menu = document.querySelectorAll("nav ul li a");
    const nav_cta = document.querySelector("nav .right .contato");

    const section_inicio = document.querySelector("#inicio");
    const inicio_span = section_inicio.querySelector(".left span");
    const inicio_p = section_inicio.querySelector(".left p");
    const inicio_cv = section_inicio.querySelector(".right .curriculo");
    const inicio_contato = section_inicio.querySelector(".right .contato");

    const section_sobre = document.querySelector("#about_me");
    const sobre_title = section_sobre.querySelector(".section_title");
    const sobre_descriptions = section_sobre.querySelectorAll(".right p.description");
    const sobre_conquistas = section_sobre.querySelectorAll(".right .container .icon p");

    const section_hard_skills = document.querySelector("#hard_skills");
    const hard_skills_descriptions = section_hard_skills.querySelectorAll(".right .description");
    const hard_skills_title = section_hard_skills.querySelector(".section_title");
    const hard_skills_ul = section_hard_skills.querySelectorAll(".right ul li");

    const section_projects = document.querySelector("#projects");
    const projects_title = section_projects.querySelector(".section_title");
    const projects_card_descriptions = section_projects.querySelectorAll(".container .card_description");
    const projects_cta = section_projects.querySelector(".container .cta");

    const section_contact = document.querySelector("#contacts");
    const contact_title = section_contact.querySelector(".section_title");
    const contact_description = section_contact.querySelector(".right p.description");

    const section_cv = document.querySelector("#cv");
    const cv_title = section_cv.querySelector(".section_title");
    const cv_description = section_cv.querySelector(".right p.description");
    const cv_download = section_cv.querySelector(".container a"); // mudar o href e o texto

    const section_footer = document.querySelector("footer");
    const footer_menu = section_footer.querySelectorAll(".menu a");
    const footer_social = section_footer.querySelectorAll(".social_media h4");
    const footer_buttons = section_footer.querySelector(".buttons");
    const footer_referencias = section_footer.querySelector(".references");
    const footer_developed_by = section_footer.querySelector(".developed_by");

    function changeLang(lang) {
        menu.forEach((item, index) => {
            item.textContent = lang.menu[index];
        });
        nav_cta.textContent = lang.cta;

        inicio_span.textContent = lang.inicio.greeting;
        inicio_p.textContent = lang.inicio.desc;
        inicio_cv.innerHTML = lang.inicio.right.cv;
        inicio_contato.innerHTML = lang.inicio.right.contato;

        sobre_title.innerHTML = `<h2>${lang.sobre_mim.title}</h2><span>${lang.sobre_mim.title}</span>`;
        sobre_descriptions.forEach((item, index) => {
            item.innerHTML = lang.sobre_mim.description[index];
        });
        sobre_conquistas.forEach((item, index) => {
            item.innerHTML = lang.sobre_mim.conquistas[index];
        });

        hard_skills_title.innerHTML = `<h2>${lang.hard_skills.title}</h2><span>${lang.hard_skills.title}</span>`;
        hard_skills_descriptions.forEach((item, index) => {
            item.innerHTML = lang.hard_skills.description[index];
        });
        hard_skills_ul.forEach((item, index) => {
            item.innerHTML = lang.hard_skills.ul[index];
        });

        projects_title.innerHTML = `<h2>${lang.projetos.title}</h2><span>${lang.projetos.title}</span>`;
        projects_card_descriptions.forEach((item, index) => {
            // item.innerHTML = lang.projetos.cards_description[index];
            item.querySelector(".description p").innerHTML = lang.projetos.cards_description[index][0];
            item.querySelector(".bottom a").innerHTML = lang.projetos.cards_description[index][1];
        });
        projects_cta.querySelector(".top span").textContent = lang.projetos.cta.span;
        projects_cta.querySelector(".top h2").textContent = lang.projetos.cta.h2;
        projects_cta.querySelector("p").textContent = lang.projetos.cta.p;
        projects_cta.querySelector("a").textContent = lang.projetos.cta.a;

        contact_title.innerHTML = `<h2>${lang.contatos.title}</h2><span>${lang.contatos.title}</span>`;
        contact_description.innerHTML = lang.contatos.description;

        cv_title.innerHTML = `<h2>${lang.cv.title}</h2><span>${lang.cv.title}</span>`;
        cv_description.innerHTML = lang.cv.description;
        cv_download.innerHTML = lang.cv.button;

        footer_menu.forEach((item, index) => {
            item.textContent = lang.footer.menu[index];
        });
        footer_social.textContent = lang.footer.social;
        footer_buttons.querySelector("h4").textContent = lang.footer.buttons.title;
        footer_buttons.querySelectorAll("a")[0].innerHTML = lang.footer.buttons.contato;
        footer_buttons.querySelectorAll("a")[1].innerHTML = lang.footer.buttons.cv;
        footer_referencias.innerHTML = lang.footer.referencias;
        footer_developed_by.innerHTML = lang.footer.developed_by;
    }


    
    const lang_switch = document.querySelector("#lang_switch input");
    const a_download_cv = document.querySelector("#inicio .right .curriculo");
    const b_download_cv = document.querySelector("#cv .container a");
    const cv_download_cv = document.querySelector("footer .buttons a.download_cv");
    
    lang_switch.addEventListener("change", () => {
        if (lang_switch.checked) {
            // en
            a_download_cv.href = "assets/cv/felipe_resume.pdf";
            b_download_cv.href = "assets/cv/felipe_resume.pdf";
            cv_download_cv.href = "assets/cv/felipe_resume.pdf";
            changeLang(en);
        } else {
            // ptbr
            a_download_cv.href = "assets/cv/cv_dev_felipe.pdf";
            b_download_cv.href = "assets/cv/cv_dev_felipe.pdf";
            cv_download_cv.href = "assets/cv/cv_dev_felipe.pdf";
            changeLang(pt);
        };
    });
});
