import os
import glob
import re
import json
import pdfplumber

pdf_dir = r"C:\Amal\Ncvstc\Documentation"
pdf_files = glob.glob(os.path.join(pdf_dir, "*.pdf"))

courses_data = []

def clean_sector_name(filename):
    name = os.path.basename(filename)
    # remove numbering like '1. ', '2 .', '10.'
    name = re.sub(r'^\d+\s*[\.\s]*', '', name)
    # remove (1).pdf or (2).pdf etc
    name = re.sub(r'\s*\(\d+\)\.pdf$', '', name, flags=re.IGNORECASE)
    name = re.sub(r'\.pdf$', '', name, flags=re.IGNORECASE)
    name = name.strip()
    return name

# Duration patterns: e.g. 1 YEAR, 2 YEARS, 6 MONTHS, 3 MONTHS, 1 MONTH, 1YEAR, 2YEARS, 6MONTHS
DURATION_PATTERN = r'(\d+\s*(?:YEARS?|MONTHS?|WEEKS?|DAYS?))'
# Qualification patterns at end of line: e.g. 12th, 10th, 8th, SSLC, PLUS TWO, DEGREE, GRADUATION, SSLC/10TH, 10TH/12TH, ANY DEGREE, PASS
QUAL_PATTERN = r'((?:12TH|10TH|8TH|7TH|SSLC|PLUS\s*TWO|DEGREE|GRADUATION|ANY\s*DEGREE|PASS|MATRICULATION|NONE|NOT\s*REQUIRED).*)$'

for pdf_path in sorted(pdf_files):
    sector_name = clean_sector_name(pdf_path)
    print(f"\nParsing: {os.path.basename(pdf_path)} -> Sector: {sector_name}")
    
    lines = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                lines.extend(text.split('\n'))

    subcourses = []
    current_item = None

    for line in lines:
        line_str = line.strip()
        if not line_str:
            continue
        
        # Skip header lines
        if "NCVSTC" in line_str or "EDUCATIONAL TRAINING" in line_str or "SL. NO" in line_str or "COURSE TITLE" in line_str:
            continue
        if sector_name.upper() in line_str.upper():
            continue

        # Check if line starts with a number (SL NO)
        match_start = re.match(r'^(\d+)[\.\s]+(.*)', line_str)
        if match_start:
            sl_no = match_start.group(1)
            rest = match_start.group(2).strip()

            # Save previous item if exists
            if current_item:
                subcourses.append(current_item)
                current_item = None

            # Try to extract duration and qualification from rest
            # Search duration
            dur_match = re.search(r'\b(\d+\s*(?:YEARS?|MONTHS?|WEEKS?))\b', rest, re.IGNORECASE)
            
            if dur_match:
                duration = dur_match.group(1).strip()
                title_part = rest[:dur_match.start()].strip()
                qual_part = rest[dur_match.end():].strip()
                
                current_item = {
                    "slNo": sl_no,
                    "title": title_part,
                    "duration": duration,
                    "qualification": qual_part if qual_part else "10th / 12th"
                }
            else:
                current_item = {
                    "slNo": sl_no,
                    "title": rest,
                    "duration": "1 Year",
                    "qualification": "10th / 12th"
                }
        else:
            # Multi-line continuation of title or qualification
            if current_item:
                # Check if this continuation line has duration or qualification
                dur_match = re.search(r'\b(\d+\s*(?:YEARS?|MONTHS?|WEEKS?))\b', line_str, re.IGNORECASE)
                if dur_match and current_item["duration"] == "1 Year":
                    current_item["duration"] = dur_match.group(1).strip()
                    prefix = line_str[:dur_match.start()].strip()
                    suffix = line_str[dur_match.end():].strip()
                    if prefix:
                        current_item["title"] += " " + prefix
                    if suffix:
                        current_item["qualification"] = suffix
                else:
                    # Append to title or qualification
                    # If qual_part is empty or default, maybe it's title
                    if current_item["qualification"] in ["10th / 12th", ""]:
                        # check if it looks like qualification
                        if re.match(r'^(10th|12th|8th|sslc|plus two|degree|graduation|pass)', line_str, re.IGNORECASE):
                            current_item["qualification"] = line_str
                        else:
                            current_item["title"] += " " + line_str
                    else:
                        current_item["title"] += " " + line_str

    if current_item:
        subcourses.append(current_item)

    # Cleanup subcourses title spaces
    for sc in subcourses:
        sc["title"] = re.sub(r'\s+', ' ', sc["title"]).strip()
        sc["qualification"] = re.sub(r'\s+', ' ', sc["qualification"]).strip()

    print(f" -> Found {len(subcourses)} subcourses.")

    courses_data.append({
        "id": sector_name.lower().replace(' ', '-').replace('&', 'and').replace(',', ''),
        "sector": sector_name,
        "pdfFileName": os.path.basename(pdf_path),
        "subcourseCount": len(subcourses),
        "subcourses": subcourses
    })

output_path = r"C:\Amal\Ncvstc\frontend\src\data\courses.json"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(courses_data, f, indent=2)

print(f"\nSaved {len(courses_data)} course sectors to {output_path}")
