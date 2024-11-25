document.addEventListener("DOMContentLoaded", () => {
    const lang_switch = document.querySelector("#lang_switch input");
    const a_download_cv = document.querySelector("#inicio .right .curriculo");

    lang_switch.addEventListener("change", () => {
        if (lang_switch.checked) {
            // en
            a_download_cv.href = "assets/cv/felipe_resume.pdf";
        } else {
            // ptbr
            a_download_cv.href = "assets/cv/cv_dev_felipe.pdf";
        };
    });
});
