# Futuristic WebApp - Full Stack

A modern, cyberpunk-themed web application built with:
- **Backend**: FastAPI (Python)
- **Frontend**: React + Vite
- **Styling**: Neon cyberpunk theme with animations

## Quick Start

### Backend (Python)
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend (Node.js)
```bash
cd frontend
npm install
npm run dev
```

Visit: http://localhost:5173

## Project Structure
```
futuristic-webapp/
├── backend/
│   ├── main.py           # FastAPI application
│   └── requirements.txt   # Python dependencies
└── frontend/
    ├── src/
    │   ├── App.jsx       # Main React component
    │   ├── App.css       # Cyberpunk styling
    │   └── main.jsx      # React entry point
    ├── index.html        # HTML template
    ├── vite.config.js    # Vite configuration
    └── package.json      # Node dependencies
```

## Features
- 🎮 Real-time API communication
- ✨ Cyberpunk neon styling with animations
- 🔗 CORS-enabled backend
- 📱 Responsive design
- ⚡ Hot module replacement (HMR)

## API Endpoints
- `GET /api/status` - Check backend status
- `POST /api/echo` - Echo service for testing
