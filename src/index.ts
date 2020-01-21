import { handleFilesSelect } from './app/handleFilesSelect'
import { printView } from './app/printView'
import { isBrowserSupported } from './app/isBrowserSupported'

const main = () => {
  const app = document.getElementById('app') as HTMLElement
  const unsupported = document.getElementById('unsupported') as HTMLElement
  const printButton = document.getElementById('print-btn') as HTMLElement
  const fileUpload = document.getElementById('file-upload') as HTMLInputElement
  const printContainer = document.getElementById('print') as HTMLElement
  
  // checking for browser support
  if (isBrowserSupported()) {
    printButton.addEventListener('click', () => printView(window), false);
    fileUpload.addEventListener('change', (e) => handleFilesSelect(e, printContainer, fileUpload), false);
    app.classList.remove('hidden')
  }
  else {
    unsupported.classList.remove('hidden')
  }
}

try {
  main()
} catch(e) {
  alert(`Unexpected error: ${e.message}`)
}
