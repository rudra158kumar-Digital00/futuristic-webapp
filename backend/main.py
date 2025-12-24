from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random
import sqlite3

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

quotes = [
    "In the neon-drenched streets of tomorrow, code is the new currency.",
    "Hack the matrix, bend the code to your will.",
    "Cyberpunk is not just a genre, it's a way of life.",
    "The future is now, and it's written in Python.",
]

visitor_count = 0

def get_visitor_count():
    conn = sqlite3.connect('visitors.db')
    c = conn.cursor()
    c.execute('CREATE TABLE IF NOT EXISTS counter (id INTEGER PRIMARY KEY, count INTEGER)')
    c.execute('SELECT count FROM counter WHERE id=1')
    result = c.fetchone()
    if result:
        count = result[0] + 1
    else:
        count = 1
    c.execute('INSERT OR REPLACE INTO counter (id, count) VALUES (1, ?)', (count,))
    conn.commit()
    conn.close()
    return count

@app.get("/api/status")
async def status():
    return {"status": "ok", "service": "futuristic-webapp", "version": "0.1.0"}

@app.get("/api/quote")
async def get_quote():
    return {"quote": random.choice(quotes)}

@app.get("/api/counter")
async def get_counter():
    return {"visits": get_visitor_count()}

@app.post("/api/echo")
async def echo(msg: Message):
    # Simple echo endpoint — replace with AI/processing logic if desired
    return {"echo": msg.text, "length": len(msg.text)}
