# 🚀 Futuristic WebApp - E Drive Quick Start

## New Location
**E:\futuristic-webapp**

## Current Status ✅
- Backend: **RUNNING** on port 8000
- Frontend: Ready (needs Node.js)

## Quick Commands

### Start Backend
```powershell
cd "E:\futuristic-webapp\backend"
&"E:\futuristic-webapp\backend\venv\Scripts\python.exe" -m uvicorn main:app --reload --port 8000
```

### Start Frontend (after Node.js installed)
```powershell
cd "E:\futuristic-webapp\frontend"
npm install        # First time only
npm run dev        # Start dev server
```

## Access Points
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Frontend**: http://localhost:5173 (after npm run dev)

## File Structure
```
E:\futuristic-webapp\
├── backend\
│   ├── venv\              ← Python virtual environment
│   ├── main.py            ← FastAPI app
│   └── requirements.txt
├── frontend\
│   ├── src\
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
├── README.md
└── SETUP.md               ← Full setup guide
```

## What's Ready?
✅ Python backend with FastAPI  
✅ React frontend with Vite  
✅ Cyberpunk neon styling  
✅ CORS enabled  
✅ API endpoints (/api/status, /api/echo)  
⏳ Node.js (install from nodejs.org)  

## Next Step
Install Node.js from https://nodejs.org/, then run:
```powershell
cd "E:\futuristic-webapp\frontend"
npm install
npm run dev
```

Visit http://localhost:5173 🎮
