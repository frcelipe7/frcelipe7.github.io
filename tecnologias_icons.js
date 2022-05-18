function backgroundTecnologias(icon, textClass, BgColor, textIcon) {
    var icon_ativado_atual = document.querySelectorAll("#tecnologias .icons .ativado");
    const loadingBg = document.querySelector("#tecnologias .carregandoFundo");
    const loading = document.querySelector("#tecnologias .carregandoFundo .carregando");
    var text = document.querySelector(`#tecnologias .text .${textClass}`);
    var text_ativado_atual = document.querySelectorAll(`#tecnologias .text .textAtivado`);

    if (icon_ativado_atual) {
        icon_ativado_atual.forEach(ativado => {
            ativado.classList.remove("ativado");
            ativado.style.backgroundColor = `transparent`;
            ativado.style.fill = `#010101`;
        });
    };
    if (text_ativado_atual) {
        text_ativado_atual.forEach(ativado => {
            ativado.classList.remove("textAtivado");
        });
    };

    loadingBg.style.animationName = "carregandoTecnologiasColorBg";
    loading.style.animationName = "carregandoTecnologias";
    icon.classList.add("ativado");
    icon.style.fill = `${BgColor[1]}`;
    document.querySelector("#tecnologias .icons .ativado").style.backgroundColor = `${BgColor[0]}`;
    text.classList.add("textAtivado");
    textIcon.style.borderLeftColor = `${BgColor[0]}`;
};

document.addEventListener("DOMContentLoaded", () => {
    const contentsTextIcon = document.querySelectorAll("#tecnologias .text .content_text")
    const icons = document.querySelectorAll('#tecnologias .icons svg');
    const iconColors = [
        ["#264de4", "#f2f2f2"],
        ["#e24f24", "#f2f2f2"],
        ["#f8e036", "#010101"],
        ["#376fa2", "#f2f2f2"],
        ["#f05133", "#f2f2f2"],
        ["#010101", "#f2f2f2"],
    ]
    const quantidadeIcons = icons.length;
    var inicio = 0;
    const textsIcons = [
        "text_css",
        "text_html",
        "text_js",
        "text_python",
        "text_git",
        "text_github",
    ];

    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            inicio = icon.id;
            backgroundTecnologias(icons[inicio], textsIcons[inicio], iconColors[inicio], contentsTextIcon[inicio]);
            inicio++;
            if (inicio >= quantidadeIcons) {
                inicio = 0;
            }
        })
    });

    backgroundTecnologias(icons[inicio], textsIcons[inicio], iconColors[inicio], contentsTextIcon[inicio]);
    inicio++;
    
    setInterval(() => {
        backgroundTecnologias(icons[inicio], textsIcons[inicio], iconColors[inicio], contentsTextIcon[inicio]);
        inicio++;
        if (inicio >= quantidadeIcons) {
            inicio = 0;
        }
    }, 15000);
});