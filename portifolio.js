document.addEventListener("DOMContentLoaded", () => {
    // background: url("images/portifolio/afma_01.png") center center no-repeat;
    const listaImagens = [
        'afma_01.png',
        'bg_04_tiny.jpg',
        'minha_foto.jpg',
    ]
    const imageContent = document.querySelector("#portifolio .content .img_content")
    const buttonsAnteriorProximo = document.querySelectorAll("#portifolio .content .mudar_buttons .button");
    let index = 0
    buttonsAnteriorProximo.forEach(button => {
        button.addEventListener("click", () => {
            console.log(button)
            console.log(button.classList[0])
            
            imageContent.style.background = `url("images/portifolio/${listaImagens[index]}") center center no-repeat;`;
        })
    });
})