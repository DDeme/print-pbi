

const readFilesAsText = (files: FileList): string[] => {
  // files is a FileList of File objects. List some properties.
    
    const filesResults: string[] = []
    for (let i = 0, file; file = files[i]; i++) {

      // Only process csv, excel files.
      // if (!file.type.match('image.*')) {
      //   continue;
      // }

      //console.log(file.type)

      const reader = new FileReader();

      // Closure to capture the file information.

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          filesResults.push(reader.result)
        }
      };

      reader.onerror = () => {
        throw new Error(`Enable to read file ${file.name}`);
      }
      // Read in the image file as a data URL.
      reader.readAsText(file);
    }

    if (filesResults.length === 0) {
      throw new Error(`No files selected`)
    }

    return filesResults
}

export const handleFileSelect = (evt): string[] => {
    const files:FileList = evt.target.files; // FileList object
    return readFilesAsText(files)
}