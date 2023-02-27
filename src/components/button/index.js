/* components/button/index.js
**/

import printMe from '../../print.js';

export default function buttonComponent(){
  
  const div = document.createElement('div'),
        btn = document.createElement('button');

  const words = ['Hello', 'webmode'];

  div.innerHTML = words.join(' ');//not Lodash
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  div.appendChild(btn);
  
  return div;
}
