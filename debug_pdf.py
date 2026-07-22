import pdfplumber

pdf_path = r"C:\Amal\Ncvstc\Documentation\1. ACCOUNTING AND FINANCE EDUCATION TRAINING SECTOR (1).pdf"

with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        print(f"--- PAGE {i+1} TEXT ---")
        print(page.extract_text())
        print(f"--- PAGE {i+1} TABLES ---")
        print(page.extract_tables())
