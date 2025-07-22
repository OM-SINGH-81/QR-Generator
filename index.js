import express from 'express';
import cors from 'cors';
import qr from 'qr-image';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/generate', (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    try {
        const qr_svg = qr.image(url, { type: 'png' });
        res.type('png');
        qr_svg.pipe(res);
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(PORT, () => {
    console.log(`QR Code Generator backend running on http://localhost:${PORT}`);
});