import './styles.css';
import shoyuRamen from './images/shoyu-ramen.jpg';
import suzukiyaLogo from './images/ramen-suzukiya-logo.png';

document.addEventListener('DOMContentLoaded', () => {
    const img = document.createElement('img');
    img.src = shoyuRamen;
    document.body.appendChild(img);

    const img2 = document.createElement('img');
    img.src = suzukiyaLogo
    document.body.appendChild(img2);
});