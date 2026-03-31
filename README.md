# 📄 ATS Resume Builder Portfolio

> A professional, marketable, and ATS-optimized resume builder that lets users input their details, preview a clean resume in real-time, and download it as a PDF — all in the browser.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Tech Stack](https://img.shields.io/badge/tech-HTML%2FCSS%2FJS-brightgreen)

---

## ✨ Features

- 🎯 **ATS-Optimized Output**: Single-column layout, semantic HTML, no graphics — designed to pass Applicant Tracking Systems.
- 🔄 **Live Preview**: See your resume update in real-time as you type.
- 📥 **One-Click PDF Download**: Export your resume instantly using `html2pdf.js`.
- ⚙️ **Configurable Data**: Pre-load default user data via `config.js` for easy customization.
- 📱 **Responsive Design**: Works on desktop and tablet screens.
- 🔒 **100% Client-Side**: No server required — your data never leaves your browser.
- 🧩 **Modular Codebase**: Clean separation of HTML, CSS, JS, and config for easy maintenance.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure for ATS parsing |
| **CSS3** | Professional styling + A4 print layout |
| **JavaScript (ES6+)** | Dynamic rendering, event handling, PDF generation |
| **html2pdf.js** | Client-side PDF export library |
| **Font Awesome** | Professional icons for UI enhancement |

---

## 📁 Project Structure

```
ats-resume-builder/
│
├── index.html          # Main application layout
├── style.css           # Styling for UI + ATS-optimized resume
├── script.js           # Logic: data binding, preview, download
├── config.js           # Default data configuration (JSON-like structure)
├── README.md           # This file
│
└── (optional) assets/  # For future icons or images
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No build tools or Node.js required — just open and run!

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/yourusername/ats-resume-builder.git
   cd ats-resume-builder
   ```

2. **Open in browser:**
   ```bash
   # Option 1: Double-click index.html
   # Option 2: Use a local server (recommended for PDF export reliability)
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Start building your resume!** 🎉

---

## 📝 Usage Guide

### 1. Fill Out the Form
- Enter your personal details, summary, skills, experience, and education in the left panel.
- For **Experience** and **Education**, use JSON array format (see examples below).

### 2. Preview Live
- Changes reflect instantly in the A4-style preview on the right.
- The preview is formatted for ATS compatibility: clean, single-column, keyword-friendly.

### 3. Download PDF
- Click **"Download PDF"** to generate and save your resume.
- Filename auto-generates: `YourName_Resume.pdf`

### 💡 JSON Format Examples

**Experience:**
```json
[
  {
    "company": "Tech Corp",
    "role": "Senior Developer",
    "date": "2021 - Present",
    "details": "Led development of cloud-based SaaS platform using React and Node.js."
  }
]
```

**Education:**
```json
[
  {
    "school": "University of Technology",
    "degree": "B.S. Computer Science",
    "year": "2020"
  }
]
```

> 💡 Tip: Use [JSONLint](https://jsonlint.com) to validate your JSON before pasting.

---

## ⚙️ Configuration (`config.js`)

Customize the default loaded data by editing `config.js`:

```javascript
const defaultConfig = {
    personal: {
        fullName: "Your Name",
        jobTitle: "Target Role",
        email: "you@example.com",
        phone: "+1 234 567 890",
        linkedin: "linkedin.com/in/yourprofile"
    },
    summary: "Your professional summary...",
    skills: "Skill 1, Skill 2, Skill 3",
    experience: [ /* array of job objects */ ],
    education: [ /* array of education objects */ ]
};
```

> Changes here will pre-fill the form on page load — perfect for creating templates or team onboarding tools.

---

## ✅ ATS Optimization Checklist

This builder follows best practices to ensure resume compatibility with Applicant Tracking Systems:

- ✅ **Single-column layout** — avoids parsing errors from multi-column designs
- ✅ **Standard section headings** — "Experience", "Education", "Skills" (ATS keywords)
- ✅ **Semantic HTML tags** — `<h1>`, `<h2>`, `<section>` for structure recognition
- ✅ **No images/icons in resume body** — prevents text extraction failures
- ✅ **Plain text formatting** — avoids hidden characters or complex CSS
- ✅ **Keyword-friendly content** — easy to tailor for job descriptions

> 📌 Pro Tip: Always review the downloaded PDF to ensure formatting remains intact before submitting.

---

## 🎨 Customization Tips

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #2c3e50;    /* Header text */
    --accent: #3498db;     /* Buttons & highlights */
}
```

### Adjust Fonts
Update the `font-family` in the global `*` selector:
```css
* { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}
```

### Modify PDF Settings
In `script.js`, adjust the `html2pdf` options:
```javascript
const opt = {
    margin: 0,
    filename: 'My_Resume.pdf',
    html2canvas: { scale: 2 }, // Increase for higher resolution
    jsPDF: { format: 'a4', orientation: 'portrait' }
};
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contribution Guidelines
- Keep code clean and well-commented
- Follow existing code style (2-space indentation, semantic class names)
- Test PDF export after changes
- Update this README if adding new features

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| PDF download not working | Use a local server (`python -m http.server`) instead of `file://` protocol |
| JSON parsing errors | Validate your Experience/Education JSON at [JSONLint](https://jsonlint.com) |
| Preview not updating | Check browser console for JS errors; ensure `script.js` is linked correctly |
| Styling looks off in PDF | Avoid browser zoom; use `html2canvas: { scale: 2 }` for sharper output |

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author

**Your Name**  
💼 [LinkedIn](https://linkedin.com/in/yourprofile)  
🐙 [GitHub](https://github.com/yourusername)  
📧 you@example.com

---

## 🙏 Acknowledgements

- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) — For reliable client-side PDF generation
- [Font Awesome](https://fontawesome.com) — For professional UI icons
- ATS guidelines from [Jobscan](https://www.jobscan.co) and [TopResume](https://www.topresume.com)

---

> 💡 **Final Tip**: Always tailor your resume keywords to match the job description before downloading. This builder gives you the format — you provide the impact! 🚀

---

*Built with ❤️ for job seekers who deserve a resume that gets seen.*
