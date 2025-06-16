const BACKEND_URL = import.meta.env.VITE_BACKEND_ENDPOINT;

async function upload() {
  const fileInput = document.getElementById('resume');
  const jdInput = document.getElementById('jd');
  const outputDiv = document.getElementById('output');

  if (!fileInput.files.length) {
    outputDiv.innerHTML = `<span style="color: #f44336;">Please upload a resume file.</span>`;
    return;
  }

  if (!jdInput.value.trim()) {
    outputDiv.innerHTML = `<span style="color: #f44336;">Please enter the job description.</span>`;
    return;
  }

  const file = fileInput.files[0];
  const jd = jdInput.value.trim();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("jd", jd);

  try {
    const response = await fetch(`${BACKEND_URL}/analyze`, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    displayScore(result.score);

  } catch (err) {
    outputDiv.innerHTML = `<span style="color: #f44336;">Error: ${err.message}</span>`;
  }
}

function displayScore(scoreStr) {
  const scoreValue = parseFloat(scoreStr.replace('%', ''));
  const outputDiv = document.getElementById('output');

  let color = '#f44336'; // red
  if (scoreValue >= 70) {
    color = '#4caf50'; // green
  } else if (scoreValue >= 40) {
    color = '#2196f3'; // blue
  }

  outputDiv.innerHTML = `
    <div style="font-size: 2.8rem; font-weight: bold; color: ${color};">
      ${scoreStr}
    </div>`;
}
