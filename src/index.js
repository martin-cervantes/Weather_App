import './css/style.css';
import Logo from './img/logo.png';

const cont = document.createElement('div');
cont.classList.add('hola');
cont.innerText = 'Hola';

const myLogo = new Image();
myLogo.src = Logo;

cont.appendChild(myLogo);

document.body.appendChild(cont);
