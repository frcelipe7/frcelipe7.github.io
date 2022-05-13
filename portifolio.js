document.addEventListener("DOMContentLoaded", () => {
    const listaImagens = [
        'afma_01.png',
        'new_job.png',
        'todo_list.png',
    ];
    const listaLinks = [
        'https://filhasdomel.github.io/site/',
        'https://www.youtube.com/watch?v=TeuvA68l0bM',
        'https://github.com/frcelipe7/todo',
    ];
    const textsPortifolio = document.querySelectorAll("#portifolio .content .content_trabalho .text_desc_trabalho .content_description_portifolio");
    const imageContent = document.querySelector("#portifolio .content .img_content");
    const buttonsAnteriorProximo = document.querySelectorAll("#portifolio .content .mudar_buttons .button");
    const linkContentImage = document.querySelector("#portifolio .content .content_trabalho .link_image");
    let index = 0;

    function slide(index, attribute) {
        textsPortifolio.forEach(desativarText => {desativarText.style.display = 'none';});
        const image = listaImagens[index];
        const text = textsPortifolio[index];
        linkContentImage.href = listaLinks[index];
        text.style.display = 'block';
        imageContent.style.animation = '';
        imageContent.setAttribute(attribute, '');
        imageContent.addEventListener('animationend', () => {
            imageContent.removeAttribute(attribute);
            imageContent.style.backgroundImage = `url("images/portifolio/${image}")`;
            imageContent.style.animation = 'backgroundOpacity';
            imageContent.style.animationDalay = '.5s';
            imageContent.style.animationDuration = '.5s';
        });
    };
    
    buttonsAnteriorProximo.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList[0] == "proximo" && index < listaImagens.length - 1) index++, slide(index, 'slidingProximo');
            if (button.classList[0] == "anterior" && index > 0) index--, slide(index, 'slidingAnterior');

            buttonsAnteriorProximo.forEach(ativarButton => ativarButton.disabled = false)
            if (index == 0) buttonsAnteriorProximo.forEach(desativarButton => {
                if (desativarButton.classList[0] == 'anterior') desativarButton.disabled = true;
            });
            if (index == listaImagens.length - 1) buttonsAnteriorProximo.forEach(desativarButton => {
                if (desativarButton.classList[0] == 'proximo') desativarButton.disabled = true;
            });
        });
    });
});