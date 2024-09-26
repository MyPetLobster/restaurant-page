import './styles.css';
import shoyuRamen from './images/dishes/shoyu-ramen.jpg';
import suzukiyaLogo from './images/misc/ramen-suzukiya-logo.png';
import githubLogo from './images/misc/github-logo.png';

document.addEventListener('DOMContentLoaded', () => {
    const mainLogo = document.querySelector('.main-logo');
    mainLogo.src = suzukiyaLogo;
    const shoyuRamenElements = document.querySelectorAll('.shoyu');
    shoyuRamenElements.forEach(element => {
        element.src = shoyuRamen;
    });
    const githubLogoElement = document.querySelector('.github-icon');
    githubLogoElement.src = githubLogo;
});