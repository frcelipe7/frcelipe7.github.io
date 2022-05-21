function alternateMode(button_one, button_two) {
    button_one.removeAttribute('opacity-one');

    button_one.setAttribute('opacity-zero', '');
    button_one.addEventListener("animationend", () => {
        button_one.style.display = 'none';

        button_two.style.display = 'block';
        button_two.setAttribute('opacity-one', '');
    }, {once: true});
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".icones_disponiveis_em").style.color = "#4d4d4d";

    // butoes
    const dark_mode_button = document.querySelector(".dark-mode .dark");
    const light_mode_button = document.querySelector(".dark-mode .light");

    // outros elementos da tela
    const body = document.querySelector('body');
    const h1Top = document.querySelector(".clima");
    const lines = document.querySelectorAll('.line');

    dark_mode_button.addEventListener('click', () => {
        alternateMode(dark_mode_button, light_mode_button);
        body.removeAttribute('on-light-mode');
        body.setAttribute('on-dark-mode', '');

        h1Top.style.color = '#f2f2f2';

        lines.forEach(line => {
            line.style.backgroundColor = '#1e1c3e6d';
            line.style.color = '#b1b1b1';
            line.style.boxShadow = '0 0 5px #2f2f4a';
        });

        document.querySelector('.feels_like svg').style.fill = '#868686';
        document.querySelector('.wind svg').style.fill = '#868686';

        document.querySelector(".carregando p").style.color = '#f2f2f2';
    });

    light_mode_button.addEventListener("click", () => {
        alternateMode(light_mode_button, dark_mode_button);
        body.removeAttribute('on-dark-mode');
        body.setAttribute('on-light-mode', '');

        h1Top.style.color = '#0e0d25';

        lines.forEach(line => {
            line.style.backgroundColor = '#d2d0d094';
            line.style.color = '#0e0d25';
            line.style.boxShadow = '0 0 5px #b1b1b1';
        });

        document.querySelector('.feels_like svg').style.fill = '#0e0d25';
        document.querySelector('.wind svg').style.fill = '#0e0d25';

        document.querySelector(".carregando p").style.color = '#0e0d25';
    });
});
