import qr from "qr-image";

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const image = qr.image(url, { type: "png" });
        res.setHeader("Content-Type", "image/png");
        image.pipe(res);
    } catch {
        res.status(500).json({ error: "Failed to generate QR code" });
    }
}
