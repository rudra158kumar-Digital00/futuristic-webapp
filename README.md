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
- 🎯 Interactive echo and quote features
- 🧹 Clear all functionality
- 👥 Persistent visitor counter (SQLite)
- 🕒 Live clock display
- 🔊 Sound effects with toggle
- 🎨 Theme customization (Cyberpunk/Light)
- 🤖 AI-powered assistant and chatbot
- 📱 Progressive Web App (PWA) features
- 🎨 Theme customization (Cyberpunk/Light)
- 🤖 AI-powered assistant
- 📱 PWA features (offline support, installable)

## API Endpoints
- `GET /api/status` - Check backend status
- `GET /api/quote` - Get a random cyberpunk quote
- `GET /api/counter` - Get and increment visitor count
- `POST /api/echo` - Echo back user messages
- `POST /api/ai` - Get AI-powered responses
- `POST /api/ai` - Get AI-powered responses
- `POST /api/echo` - Echo back user messages

## Future Enhancements
- 🔐 User authentication system
- 💾 Database integration (SQLite/PostgreSQL) ✅ Added basic SQLite
- 🌐 Real-time chat with WebSockets ✅ Added AI chatbot
- 🤖 AI-powered responses ✅ Added basic AI assistant
- 📊 Analytics dashboard
- 🎨 Theme customization ✅ Added theme toggle
- 📱 Progressive Web App (PWA) features ✅ Added PWA basics

## Deployment
### Backend (FastAPI)
#### Railway (Recommended)
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repo
3. Add environment variables if needed
4. Deploy automatically

#### Render
1. Go to [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

#### Local Testing
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend (React + Vite)
#### Vercel (Recommended)
1. Go to [Vercel.com](https://vercel.com)
2. Connect GitHub repo
3. Set root directory to `frontend`
4. Deploy automatically

#### Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Drag & drop the `frontend/dist` folder (after build)
3. Or connect GitHub and set build command: `npm run build`

#### Local Testing
```bash
cd frontend
npm install
npm run dev
```

### Full Stack Deployment
For production, deploy backend and frontend separately, then update frontend API calls to use the deployed backend URL.

### Environment Variables
Create `.env` file in `frontend/`:
```
VITE_API_BASE_URL=http://localhost:8000
```

For production, set to your Railway backend URL:
```
VITE_API_BASE_URL=https://your-app-name.up.railway.app
```
- `POST /api/echo` - Echo service for testing
