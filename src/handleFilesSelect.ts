import {readFilesAsText} from './readFilesAsText'
import  * as csvtojson from 'csvtojson'
import { renderPrintView } from './renderPrintView'
import { printView } from './printView'

const parseCsv = async (text: string): Promise<any[]> => csvtojson.csv().fromString(text)

const parseCsvFiles = async (texts: string[]) => {
  const funcs = texts.map((t) => () => parseCsv(t))

  return Promise.all(funcs.map(f => f()))
}

export const handleFilesSelect = async(evt: Event, printContainer: HTMLElement): Promise<undefined> => {
  if (evt.target === null) {
    return
  }  
  
  const files:FileList | null = (<HTMLInputElement>evt.target).files; // FileList object
    
  if (files === null){
    return
  }

  const textFiles = await readFilesAsText(files)
  const csvFiles = await parseCsvFiles(textFiles)
  // do validation 

  renderPrintView(csvFiles[0], printContainer);
  printView(window);
  return 
}