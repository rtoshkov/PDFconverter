const libre = require('libreoffice-convert');
const {promises: fs} = require("fs");
libre.convertAsync = require('util').promisify(libre.convert);

async function docToPdf(folder, fileName) {
    const noExtName = fileName.split('.doc')[0];
    const ext = '.pdf'
    const inputPath = folder + `\\${fileName}`;
    const outputPath = folder + `\\${noExtName}${ext}`;
    console.log('PATH', inputPath);
    const docxBuf = await fs.readFile(inputPath);
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
    await fs.writeFile(outputPath, pdfBuf);
}

module.exports = {
    docToPdf,
}

