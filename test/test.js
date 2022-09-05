'use strict';

const path = require('path');
const fs = require('fs').promises;

// const libre = require('libreoffice-convert');
// libre.convertAsync = require('util').promisify(libre.convert);
//
// async function convertToPdf(fileName) {
//     const noExtName = fileName.split('.doc');
//     const ext = '.pdf'
//     const inputPath = path.join(__dirname, `/${fileName}`);
//     const outputPath = path.join(__dirname, `/${noExtName}${ext}`);
//     const docxBuf = await fs.readFile(inputPath);
//     let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);
//     await fs.writeFile(outputPath, pdfBuf);
// }
//
// const file1= 'pass.docx';
// const file2= 'test.docx';
//
// //TODO find out the error message structure
// main(file1).catch(function (err) {
//     console.log(`Error converting file: ${err}`);
// });
