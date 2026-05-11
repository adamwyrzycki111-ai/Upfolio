# Upfolio AI

<p align="center">
  <strong>AI-Powered Portfolio Generator for Upwork Freelancers</strong>
</p>

<p align="center">
  Turn any Upwork job posting into a professional portfolio that wins clients.
</p>

---

## 🚀 Features

- **AI Job Analysis** - Paste a job posting and let AI understand requirements, skills, and deliverables
- **Similar Products Search** - Find and research similar live products/apps
- **Feature Extraction** - Automatically extract and categorize features
- **Portfolio Generation** - Generate professional portfolio descriptions
- **PDF Export** - Create downloadable PDF portfolios with customizable themes
- **Responsive Design** - Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **Framer Motion** for animations
- **jsPDF** for PDF generation
- **Lucide React** for icons
- **CSS Variables** for theming

### Backend
- **Python Flask**
- **OpenAI API** integration (with fallback)
- **CORS** enabled

---

## 📦 Installation

### Prerequisites
- Node.js 18+
- Python 3.8+

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/adamwyrzycki111-ai/Upfolio.git
cd Upfolio

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt
```

---

## 🚦 Running the App

### Start Backend

```bash
cd backend
python app.py
```

The backend runs on http://localhost:5000

### Start Frontend

```bash
cd frontend
npm run dev
```

The frontend runs on http://localhost:5173

---

## 📖 Usage

1. **Open the app** at http://localhost:5173
2. **Paste a job posting** into the text area
3. Click **Analyze Job**
4. View results in tabs:
   - **Analysis** - Job requirements and skills
   - **Products** - Similar products with screenshots
   - **Portfolio** - Generated project descriptions
   - **Export** - Generate PDF

---

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/analyze` | POST | Analyze job posting |
| `/api/search-products` | POST | Search similar products |
| `/api/generate-portfolio` | POST | Generate portfolio |
| `/api/health` | GET | Health check |

### Example Request

```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"job_text": "We need a React developer to build our dashboard..."}'
```

---

## 🎨 Themes

The PDF generator supports multiple color themes:
- Coral (default)
- Ocean Blue
- Forest Green
- Violet
- Midnight

---

## 📁 Project Structure

```
Upfolio/
├── backend/
│   ├── app.py           # Flask API
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── JobInput.jsx
│   │   │   ├── Results.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── PortfolioPreview.jsx
│   │   │   ├── PDFGenerator.jsx
│   │   │   └── Footer.jsx
│   │   └── styles/
│   └── package.json
├── SPEC.md
└── README.md
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - feel free to use this project for any purpose.

---

## 🙏 Acknowledgments

- [Clash Display](https://fontshare.com/) - For the beautiful display font
- [Satoshi](https://fontshare.com/) - For the body font
- Unsplash - For product images
