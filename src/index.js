/* index.js
 * */

import './styles/style.scss';
import buttonComponent from './components/button/index.js';


const
  main = document.querySelector('main'),
  article = document.querySelector('article');


main.classList.add('fluid-type');
article.appendChild(buttonComponent());
