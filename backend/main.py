from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Futuristic WebApp API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    text: str

@app.get("/api/status")
async def status():
    return {"status": "ok", "service": "futuristic-webapp", "version": "0.1.0"}

@app.post("/api/echo")
async def echo(msg: Message):
    # Simple echo endpoint — replace with AI/processing logic if desired
    return {"echo": msg.text, "length": len(msg.text)}
