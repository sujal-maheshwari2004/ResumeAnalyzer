# Resume Analyzer

A web application that analyzes how well your resume matches a given job description.

## Features

- Upload your resume (PDF)
- Paste a job description
- Get a match score between your resume and the job description

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** FastAPI (Python)
- **Containerization:** Docker

## Getting Started

### Prerequisites

- Docker installed on your system
- (Optional) Python 3.12+ and pip if running backend locally

### Running with Docker

1. Build and run the backend:
   ```sh
   cd resume-backend
   docker build -t resume-backend .
   docker run -p 8000:8000 resume-backend
   ```

2. Open `frontend/index.html` in your browser.

### Running Locally (Without Docker)

1. Install backend dependencies:
   ```sh
   cd resume-backend
   pip install -r requirements.txt
   ```

2. Start the backend server:
   ```sh
   uvicorn main:app --reload
   ```

3. Open `frontend/index.html` in your browser.

## Usage

1. Paste the job description in the provided textarea.
2. Upload your resume (PDF).
3. Click "Analyze" to see your match score.

## Project Structure

```
resume_analyzer/
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── resume-backend/
    ├── main.py
    ├── requirements.txt
    └── Dockerfile
```

## License

MIT
