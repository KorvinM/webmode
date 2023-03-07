/**
 * Example module
**/
import './styles/style.scss';
import buttonComponent from './components/button/index.js';

export default function structure(){
  
  const
  main = document.querySelector('main'),
  article = document.querySelector('article');

main.classList.add('fluid-type');
article.appendChild(buttonComponent());

}

