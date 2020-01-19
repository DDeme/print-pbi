import {readFilesAsText} from './readFilesAsText'




export const handleFileSelect = async(evt): Promise<string[]> => {
    const files:FileList = evt.target.files; // FileList object
    return readFilesAsText(files)
}