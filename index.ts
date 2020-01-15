// Import stylesheets
import './style.css';

import {handleFileSelect} from './handleFileLoad'
import { printView } from './printView'
import { isBrowserSupported } from './isBrowserSupported'
import { renderPrintView } from './renderPrintView'
// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `Select a file: `;



const main = () => {
  // checking browser support
  if (isBrowserSupported()) {
    document.querySelector('#app').classList.remove('hidden')
  }
  else {
    document.querySelector('#unsupported').classList.remove('hidden')
  }
  document.getElementById('file-upload').addEventListener('change', handleFileSelect, false);
  
  renderPrintView()
  printView()
}

// run main on dom load (ready)
//window.addEventListener('load', main)

main()








