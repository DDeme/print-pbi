// Import stylesheets
import './main.scss';

import {handleFileSelect} from './handleFileLoad'
import { printView } from './printView'
import { isBrowserSupported } from './isBrowserSupported'
import { renderPrintView, PbiDto } from './renderPrintView'
// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `Select a file: `;


const sampleData: PbiDto[] = [
  {
    ID: '1',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '2',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '3',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '4',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '5',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '6',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '7',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '8',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '9',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '10',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
]

const main = () => {
  // checking browser support
  if (isBrowserSupported()) {
    document.querySelector('#app').classList.remove('hidden')
  }
  else {
    document.querySelector('#unsupported').classList.remove('hidden')
  }
  document.getElementById('print-btn').addEventListener('click', printView, false);
  document.getElementById('file-upload').addEventListener('change', handleFileSelect, false);
  
  renderPrintView(sampleData)
  // printView()
}

// run main on dom load (ready)
//window.addEventListener('load', main)

main()