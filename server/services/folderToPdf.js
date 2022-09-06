const fs = require('fs').promises;
const {docToPdf} = require('./docToPdf');
const {resetProgressSheet, updateRecords, updateFilesNumber, updateStatus} = require('./googleSheet');

const ext = {
    doc: 'doc',
    docx: 'docx',
}


async function folderToPdf(folder) {
    await updateStatus('RUNNING');
    const files = await fs.readdir(folder);
    await resetProgressSheet();
    await updateFilesNumber(files.length);
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.endsWith(ext.docx) || file.endsWith(ext.doc)) {
            await docToPdf(folder, file).catch(async function (err) {
                console.log(`ERR: ${err}`);
                await updateRecords(file, 'not completed')
            });
        }
    }
    await updateStatus('NOT RUNNING');
}

module.exports = {
    folderToPdf,
}
