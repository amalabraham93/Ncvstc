import os
import zipfile

docx_file = r'C:\Amal\Ncvstc\Documentation\REWORK.docx'
extract_dir = r'C:\Amal\Ncvstc\frontend\public\images'

if not os.path.exists(extract_dir):
    os.makedirs(extract_dir)

with zipfile.ZipFile(docx_file, 'r') as docx_zip:
    for item in docx_zip.namelist():
        if item.startswith('word/media/'):
            filename = os.path.basename(item)
            if filename:
                source = docx_zip.open(item)
                target_path = os.path.join(extract_dir, filename)
                with open(target_path, "wb") as target:
                    target.write(source.read())
                print(f"Extracted {filename}")
