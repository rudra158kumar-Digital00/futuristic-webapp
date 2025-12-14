# Futuristic WebApp - Setup & Run Guide

## 🚀 Quick Start

Your futuristic web app is ready! Here's how to run it:

### Prerequisites
1. **Python 3.10+** - Already installed ✅
2. **Node.js & npm** - [Download from nodejs.org](https://nodejs.org/) (LTS recommended)

### Backend (Python) - ✅ READY TO GO
```powershell
cd "E:\futuristic-webapp\backend"
# Use venv python:
&"E:\futuristic-webapp\backend\venv\Scripts\python.exe" -m uvicorn main:app --reload --port 8000
```
- API runs on: **http://localhost:8000**
- API Docs: **http://localhost:8000/docs**

### Frontend (React + Vite) - REQUIRES NODE.JS
```powershell
# First time only:
cd "E:\futuristic-webapp\frontend"
npm install

# Start dev server:
npm run dev
```
- Frontend runs on: **http://localhost:5173**

## 📋 Current Status

### Backend: ✅ RUNNING ON E DRIVE
- Location: `E:\futuristic-webapp\backend`
- FastAPI server on port 8000
- Virtual environment created and configured ✅
- Dependencies installed (FastAPI 0.124.4, Pydantic 2.12.5, Uvicorn 0.38.0)
- Auto-reload enabled for development

### Frontend: ⏳ AWAITING NODE.JS
- Location: `E:\futuristic-webapp\frontend`
- React components created ✅
- Vite config ready ✅
- Cyberpunk styling complete ✅
- Waiting for: npm install

## 🎨 Project Features

- **Cyberpunk Neon Theme** - Futuristic glowing cyan/magenta/yellow UI
- **Real-time API Communication** - React frontend talks to FastAPI backend
- **Responsive Design** - Works on desktop and mobile
- **Interactive Echo Service** - Test API endpoints in real-time
- **Animated UI Elements** - Scanlines, glowing borders, floating animations

## 📁 Structure

```
E:\futuristic-webapp\
├── backend/                    # FastAPI server
│   ├── venv/                  # Python virtual environment ✅ Created
│   ├── main.py                # Endpoints: /api/status, /api/echo
│   └── requirements.txt        # Python dependencies
│
└── frontend/                   # React + Vite
    ├── src/
    │   ├── App.jsx            # Main React component
    │   ├── App.css            # Cyberpunk styling
    │   └── main.jsx           # Entry point
    ├── index.html             # HTML template
    ├── vite.config.js         # Vite configuration
    └── package.json           # Node dependencies
```

## 🔌 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/status` | Check backend health |
| POST | `/api/echo` | Echo back your message |

**Example Request:**
```bash
curl -X POST http://localhost:8000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello!"}'
```

**Response:**
```json
{
  "echo": "Hello!",
  "length": 6
}
```

## 🛠️ Development Commands

### Backend
```powershell
# Run with auto-reload
python -m uvicorn main:app --reload --port 8000

# Without auto-reload
python -m uvicorn main:app --port 8000

# View API documentation
# Open: http://localhost:8000/docs
```

### Frontend
```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚨 Troubleshooting

### Backend won't start
- Make sure port 8000 is not in use
- Check Python version: `python --version` should be 3.10+
- Reinstall deps: `pip install -r requirements.txt`

### Frontend won't install
- Install Node.js from https://nodejs.org/
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -r node_modules` then `npm install`

### CORS errors
- Backend CORS is already enabled for all origins (development friendly)
- Frontend proxy is configured in vite.config.js

## 🎯 Next Steps

1. **Install Node.js** if you haven't already
2. **Run `npm install`** in the frontend directory
3. **Run `npm run dev`** to start the dev server
4. **Visit http://localhost:5173** in your browser
5. **Test the Echo endpoint** - type a message and click SEND

Enjoy your futuristic web app! 🚀
