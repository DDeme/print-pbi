import { handleFilesSelect } from './app/handleFilesSelect'
import { printView } from './app/printView'
import { isBrowserSupported } from './app/isBrowserSupported'

const main = () => {
  const app = document.getElementById('app') as HTMLElement
  const unsupported = document.getElementById('unsupported') as HTMLElement
  const printButton = document.getElementById('print-btn') as HTMLElement
  const fileUpload = document.getElementById('file-upload') as HTMLInputElement
  const printContainer = document.getElementById('print') as HTMLElement
  const colRange = document.getElementById('col') as HTMLInputElement
  const colVal = document.getElementById('col-res') as HTMLElement
  const rowRange = document.getElementById('row') as HTMLInputElement
  const rowVal = document.getElementById('row-res') as HTMLElement


  // checking for browser support
  if (isBrowserSupported()) {
    const root = document.documentElement;
    colRange.addEventListener(`change`, (e: any) => {
      colVal.innerText = `(${e.target.value})`
      root.style.setProperty(`--items-per-row`,e.target.value)
    })

    rowRange.addEventListener(`change`, (e: any) => {
      rowVal.innerText = `(${e.target.value})`
      root.style.setProperty(`--rows-per-page`,e.target.value)
    })
    
    printButton.addEventListener('click', () => printView(), false)
    fileUpload.addEventListener(
      'change',
      e => handleFilesSelect(e, printContainer, fileUpload, parseInt(rowRange.value), parseInt(colRange.value)),
      false
    )
    app.classList.remove('hidden')
  } else {
    unsupported.classList.remove('hidden')
  }
}

try {
  main()
} catch (e) {
  alert(`Unexpected error: ${e.message}`)
}
