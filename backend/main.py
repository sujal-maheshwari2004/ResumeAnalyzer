from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import fitz  # PyMuPDF

app = FastAPI()

# Allow CORS for frontend calls
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...),
    jd: str = Form(...)
):
    content = await file.read()
    pdf = fitz.open(stream=content, filetype="pdf")
    resume_text = ""
    for page in pdf:
        resume_text += page.get_text()

    resume_text_lower = resume_text.lower()
    jd_lower = jd.lower()

    # Extract keywords from JD (can be improved later with NLP)
    jd_keywords = set(jd_lower.split())

    matched = [kw for kw in jd_keywords if kw in resume_text_lower]
    missing = [kw for kw in jd_keywords if kw not in resume_text_lower]
    
    # Avoid division by zero
    if not jd_keywords:
        score = 0
    else:
        score = len(matched) / len(jd_keywords) * 100

    return {
        "matched": matched,
        "missing": missing,
        "score": f"{score:.2f}%"
    }
