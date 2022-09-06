const {GoogleSpreadsheet} = require('google-spreadsheet');
const {SHEET_ADDRESS, CREDENTIALS,TITLE_PROGRESS, } = require('../../config');

const doc = new GoogleSpreadsheet(SHEET_ADDRESS);

async function authenticate() {
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key,
    })
}

// ***** NOT USED *****
// async function createProcessSheet() {
//     await authenticate();
//     await deleteOldProcessSheet(false)
//     const newSheet = await doc.addSheet({title: TITLE_PROGRESS});
// }

// async function deleteOldProcessSheet(withAuth = true) {
//     if (withAuth) {
//         await authenticate();
//     }
//     await doc.loadInfo()
//     const oldSheet = doc.sheetsByTitle[TITLE_PROGRESS];
//
//     if (oldSheet) {
//         await oldSheet.delete();
//     }
// }

async function resetProgressSheet(){
    await authenticate();
    await doc.loadInfo()
    const progressSheet = doc.sheetsByTitle[TITLE_PROGRESS];
    await progressSheet.loadCells();
    await progressSheet.clear('A:B');
    await progressSheet.loadCells();
    let a1 = progressSheet.getCellByA1('A1');
    a1.value='FILES';
    let b1 = progressSheet.getCellByA1('B1');
    b1.value='STATUS';
    await progressSheet.saveUpdatedCells();
}



async function updateFilesNumber(data){
    await authenticate();
    await doc.loadInfo()
    const processSheet = doc.sheetsByTitle[TITLE_PROGRESS];
    await processSheet.loadCells('E1:F1');
    let cell = processSheet.getCellByA1('E1');
    cell.value=data;
    await processSheet.saveUpdatedCells();
}


async function updateRecords(data, status){
    await authenticate();
    await doc.loadInfo();
    const processSheet = doc.sheetsByTitle[TITLE_PROGRESS];
    await processSheet.addRow({FILES: data, STATUS:status});
}

async function updateStatus(data){
    await authenticate();
    await doc.loadInfo()
    const processSheet = doc.sheetsByTitle[TITLE_PROGRESS];
    await processSheet.loadCells('G1:I3');
    let cell = processSheet.getCellByA1('G2');
    cell.value=data;
    await processSheet.saveUpdatedCells();
}


module.exports = {
    updateFilesNumber,
    updateRecords,
    resetProgressSheet,
    updateStatus,
}

