const form = document.getElementById('qr-form');
const urlInput = document.getElementById('url-input');
const qrResult = document.getElementById('qr-result');
const downloadBtn = document.getElementById('download-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = urlInput.value.trim();
  if (!url) return;

  qrResult.innerHTML = 'Generating...';
  downloadBtn.style.display = 'none';
  downloadBtn.href = '#';

  try {
    const response = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    if (!response.ok) throw new Error('Failed to generate QR code');
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    qrResult.innerHTML = `<img src="${imgUrl}" alt="QR Code" />`;
    downloadBtn.href = imgUrl;
    downloadBtn.style.display = 'inline-block';
  } catch (err) {
    qrResult.innerHTML = `<span style="color:red;">${err.message}</span>`;
    downloadBtn.style.display = 'none';
    downloadBtn.href = '#';
  }
}); 