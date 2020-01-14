// Import stylesheets
import './style.css';

import {handleFileSelect} from './handleFileLoad'
import { printView } from './printView'

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `Select a file: `;

document.getElementById('file-upload').addEventListener('change', handleFileSelect, false);


printView()



