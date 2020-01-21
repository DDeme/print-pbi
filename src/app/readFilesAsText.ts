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

export const readFilesAsText = async (files: FileList): Promise<string[]> => {
    // files is a FileList of File objects. List some properties.
    
    const readFuncs = []
    for (let i = 0, file: File; file = files[i]; i++) {  
    // Only process csv, excel files.
    // if (!file.type.match('image.*')) {
    //   continue;
    // }
      readFuncs.push(() => readFileAsync(file))
    }
    
    const filesResults: string[] = await Promise.all(readFuncs.map(f => f()))

    if (filesResults.length === 0) {
      throw new Error(`No files selected`)
    }

    return filesResults
}