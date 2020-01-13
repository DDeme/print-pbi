// Import stylesheets
import './style.css';

import {handleFileSelect} from './handleFileLoad'

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `Select a file: `;

document.getElementById('file').addEventListener('change', handleFileSelect, false);