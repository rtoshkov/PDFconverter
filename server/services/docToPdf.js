const libre = require('libreoffice-convert');
const {promises: fs} = require("fs");
libre.convertAsync = require('util').promisify(libre.convert);
const {updateRecords} = require('./googleSheet');

async function docToPdf(folder, fileName) {
    const noExtName = fileName.split('.doc')[0];
    const ext = '.pdf'
    const inputPath = folder + `\\${fileName}`;
    const outputPath = folder + `\\${noExtName}${ext}`;
    const docxBuf = await fs.readFile(inputPath);
    let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
    await fs.writeFile(outputPath, pdfBuf);
    await updateRecords(fileName, 'completed');

}

module.exports = {
    docToPdf,
}

