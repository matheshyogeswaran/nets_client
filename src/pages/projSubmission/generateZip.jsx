import JSZip from "jszip";
import { saveAs } from "file-saver";

export const generateZip = () => {
  var zip = new JSZip();

  zip.file("Hello.txt", "Hello World\n");

  var img = zip.folder("images");

  zip.generateAsync({ type: "blob" }).then(function(content) {
    saveAs(content, "example.zip");
  });
};
