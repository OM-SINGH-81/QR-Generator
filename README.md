# 🔳 QR Code Generator

This is a simple Node.js CLI application that takes a user-provided URL and generates a corresponding QR code image. It also saves the entered URL in a text file.

## 🚀 Features

- Prompt user for URL using the **Inquirer** package  
- Generate a **QR Code image** with the **qr-image** package  
- Save the URL to a local `URL.txt` file using Node's `fs` module  
- Simple CLI-based tool for quick QR generation

## 📸 Preview

![QR Code Image](./qr-img.png)

## 🧑‍💻 Technologies Used

- Node.js  
- [inquirer](https://www.npmjs.com/package/inquirer)  
- [qr-image](https://www.npmjs.com/package/qr-image)  
- File System module (fs)

## 📦 Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/OM-SINGH-81/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

## 🛠️ Usage

Run the script using Node.js:

```bash
node index.js
```

Then, enter your desired URL when prompted. The QR code will be saved as `qr-img.png`, and the URL will be stored in `URL.txt`.

## 📁 File Structure

```
📦 qr-code-generator
 ┣ 📜 index.js         ← Main script file
 ┣ 📜 solution.js      ← Alternate solution with inline documentation
 ┣ 📜 package.json     ← Project metadata and dependencies
 ┣ 📜 package-lock.json← Detailed dependency tree
 ┣ 📜 URL.txt          ← Saved URL after generation
 ┗ 📸 qr-img.png       ← Output QR image
```

## ✅ What I Learned

- How to take user input via CLI using `inquirer`  
- Creating QR codes programmatically with `qr-image`  
- Working with Node.js filesystem APIs (`fs`)  
- Structuring a basic CLI Node.js project

## 🔗 Project Link

[View this project on GitHub](https://github.com/OM-SINGH-81)

## 📄 License

This project is licensed under the ISC License.
