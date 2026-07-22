import os
import glob
import re
import json

try:
    import pypdf
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf", "pdfplumber"])
    import pypdf

import pdfplumber

pdf_dir = r"C:\Amal\Ncvstc\Documentation"
pdf_files = glob.glob(os.path.join(pdf_dir, "*.pdf"))

courses_data = []

def clean_sector_name(filename):
    name = os.path.basename(filename)
    name = re.sub(r'^\d+\s*[\.\s]*', '', name) # remove leading numbers like '1. ', '2 .'
    name = re.sub(r'\s*\(\d+\)\.pdf$', '', name, flags=re.IGNORECASE) # remove (1).pdf
    name = re.sub(r'\.pdf$', '', name, flags=re.IGNORECASE) # remove .pdf
    name = name.strip()
    return name

for pdf_path in sorted(pdf_files):
    sector_name = clean_sector_name(pdf_path)
    print(f"Processing: {os.path.basename(pdf_path)} -> Sector: {sector_name}")
    
    subcourses = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            tables = page.extract_tables()
            for table in tables:
                for row in table:
                    if not row: continue
                    # Clean empty entries
                    row = [cell.strip().replace('\n', ' ') if cell else '' for cell in row]
                    # Check if header row
                    if any('COURSE TITLE' in cell.upper() for cell in row if cell):
                        continue
                    if any('SL' in cell.upper() for cell in row if cell) and any('DURATION' in cell.upper() for cell in row if cell):
                        continue
                    
                    # Filter out header/title rows
                    if len(row) >= 4:
                        sl_no, title, duration, qualification = row[0], row[1], row[2], row[3]
                        if title and duration and qualification and title.upper() != 'COURSE TITLE':
                            subcourses.append({
                                "slNo": sl_no,
                                "title": title,
                                "duration": duration,
                                "qualification": qualification
                            })

    courses_data.append({
        "id": sector_name.lower().replace(' ', '-').replace('&', 'and'),
        "sector": sector_name,
        "pdfFileName": os.path.basename(pdf_path),
        "subcourses": subcourses
    })

output_path = r"C:\Amal\Ncvstc\frontend\src\data\courses.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(courses_data, f, indent=2)

print(f"Successfully extracted {len(courses_data)} course sectors to {output_path}")
