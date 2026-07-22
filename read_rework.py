import sys
try:
    import docx
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "python-docx"])
    import docx

doc = docx.Document(r'C:\Amal\Ncvstc\Documentation\REWORK.docx')
text = '\n'.join([para.text for para in doc.paragraphs])

with open(r'C:\Amal\Ncvstc\Documentation\rework.txt', 'w', encoding='utf-8') as f:
    f.write(text)
print("Extraction complete.")
