const readFile = (file, onLoadCallback) => {
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsText(file);
}


export const handleFileSelect = (evt) => {
    const files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    for (let i = 0, file; file = files[i]; i++) {

      // Only process image files.
      // if (!f.type.match('image.*')) {
      //   continue;
      // }

      const reader = new FileReader();

      // Closure to capture the file information.

      reader.onload = () => {
        console.log(reader.result);
      };
      // Read in the image file as a data URL.
      reader.readAsText(file);
    }
}