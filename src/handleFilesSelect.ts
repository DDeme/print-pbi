import {readFilesAsText} from './readFilesAsText'
import  * as csvtojson from 'csvtojson'
import { renderPrintView } from './renderPrintView'
import { printView } from './printView'

const parseCsv = async (text: string): Promise<any[]> => csvtojson().fromString(text)

const parseCsvFiles = async (texts: string[]) => {
  const funcs = texts.map((t) => () => parseCsv(t))

  return Promise.all(funcs.map(f => f()))
}

export const handleFilesSelect = (printContainer: HTMLElement) => async(evt): Promise<undefined> => {
    const files:FileList = evt.target.files; // FileList object
    const textFiles = await readFilesAsText(files)
    const csvFiles = await parseCsvFiles(textFiles)
    // do validation 

    renderPrintView(csvFiles[0], printContainer);
    printView(window);
    return 
}