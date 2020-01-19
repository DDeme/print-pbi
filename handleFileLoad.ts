const readFileAsync = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') { 
        resolve(reader.result);
      }
    };

    reader.onerror = reject;
    reader.readAsText(file);
  })
}

const readFilesAsText = async (files: FileList): Promise<string[]> => {
    // files is a FileList of File objects. List some properties.
    
    const readFuncs = []
    for (let i = 0, file; file = files[i]; i++) {  
    // Only process csv, excel files.
    // if (!file.type.match('image.*')) {
    //   continue;
    // }
      readFuncs.push(() => readFileAsync(file))
    }
    const filesResults: string[] = await Promise.all(readFuncs.map(f => f()))
    console.log(filesResults)
    if (filesResults.length === 0) {
      throw new Error(`No files selected`)
    }

    return filesResults
}

export const handleFileSelect = async(evt): Promise<string[]> => {
    const files:FileList = evt.target.files; // FileList object
    return readFilesAsText(files)
}