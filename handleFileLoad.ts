const readFile = (file, onLoadCallback) => {
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsText(file);
}


export const handleFileSelect = (evt) => {
    console.log(evt.target.selectedFile)
    debugger
    const files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    for (let i = 0, f; f = files[i]; i++) {

      // Only process image files.
      // if (!f.type.match('image.*')) {
      //   continue;
      // }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          console.log(theFile.name);
          readFile(e)
          debugger
          // var span = document.createElement('span');
          // span.innerHTML = ['<img class="thumb" src="', e.target.result,
          //                   '" title="', escape(theFile.name), '"/>'].join('');
          // document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }




}