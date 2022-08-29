from docx2pdf import convert
import win32com.client
import os
import asyncio

CURRENT_DIR = "D:\JS Projects\PDFconverter\pythonConverter"
WORD_DIR = 'files'
path = CURRENT_DIR + '\\' + WORD_DIR + '\\'
print(path)
files = os.listdir(path)
print(files)


async def convert_doc_to_docx(file_name):
    word = win32com.client.Dispatch("Word.application")
    word_doc = word.Documents.Open(path + file_name, False, False, False)
    docx_file = '{0}{1}'.format(file, 'x')
    word_doc.SaveAs2(path + docx_file, FileFormat=16)
    word_doc.Close()
    return


for file in files:
    if file.startswith('~$'):
        continue
    elif file.endswith('doc'):
        print(file)
        loop = asyncio.get_event_loop()
        loop.run_until_complete(convert_doc_to_docx(file))
        convert(path + file + 'x')
    elif file.endswith('docx'):
        convert(path + file)