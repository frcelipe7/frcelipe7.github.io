import i18next from 'i18next';

i18next.init({
  lng: 'ptbr', // Idioma padrão
  resources: {
    en: { translation: { welcome: document.querySelector("nav ul .about_me") } },
    pt: { translation: { welcome: "Bem-vindo" } }
  }
});

document.querySelector('nav ul .about_me').innerHTML = i18next.t('welcome');
