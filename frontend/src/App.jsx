import { useState, useEffect } from 'react'
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

function App() {
  const [status, setStatus] = useState('loading...')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState('')
  const [counter, setCounter] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [aiResponse, setAiResponse] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { sender: 'AI', text: 'Greetings, human. I am your cyberpunk AI assistant. How can I help you navigate the matrix today?' }
  ])
  const [chatInput, setChatInput] = useState('')

  useEffect(() => {
    fetchStatus()
    fetchCounter()
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }

    return () => clearInterval(timer)
  }, [])

  const fetchStatus = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/status`)
      const data = await res.json()
      setStatus(`${data.service} v${data.version}`)
    } catch (err) {
      setStatus('offline')
    }
  }

  const fetchCounter = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/counter`)
      const data = await res.json()
      setCounter(data.visits)
    } catch (err) {
      setCounter('N/A')
    }
  }

  const handleEcho = async () => {
    if (!message.trim()) return
    setLoading(true)
    playBeep()
    try {
      const res = await fetch(`${API_BASE_URL}/api/echo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message })
      })
      const data = await res.json()
      setResponse(`Echo: "${data.echo}" (${data.length} chars)`)
    } catch (err) {
      setResponse('Error: Failed to connect')
    } finally {
      setLoading(false)
    }
  }

  const handleAi = async () => {
    if (!message.trim()) return
    playBeep()
    try {
      const res = await fetch(`${API_BASE_URL}/api/ai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message })
      })
      const data = await res.json()
      setAiResponse(`AI: ${data.response}`)
    } catch (err) {
      setAiResponse('AI: Error connecting to neural network')
    }
  }
  const sendChatMessage = async () => {
    if (!chatInput.trim()) return
    const userMessage = { sender: 'You', text: chatInput }
    setChatMessages(prev => [...prev, userMessage])
    playBeep()
    try {
      const res = await fetch(`${API_BASE_URL}/api/ai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: chatInput })
      })
      const data = await res.json()
      const aiMessage = { sender: 'AI', text: data.response }
      setChatMessages(prev => [...prev, aiMessage])
    } catch (err) {
      const errorMessage = { sender: 'AI', text: 'Error: Neural network offline' }
      setChatMessages(prev => [...prev, errorMessage])
    }
    setChatInput('')
  }
  const fetchQuote = async () => {
    playBeep()
    try {
      const res = await fetch('/api/quote')
      const data = await res.json()
      setQuote(data.quote)
    } catch (err) {
      setQuote('Error fetching quote')
    }
  }

  const clearAll = () => {
    playBeep()
    setMessage('')
    setResponse('')
    setQuote('')
  }

  const playBeep = () => {
    if (!soundEnabled) return
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    } catch (err) {
      console.log('Audio not supported')
    }
  }

  const toggleTheme = () => {
    playBeep()
    setTheme(theme === 'cyberpunk' ? 'light' : 'cyberpunk')
  }

  return (
    <div className={`app ${theme === 'light' ? 'dark' : ''}`}>
      <div className="stars"></div>
      <div className="grid"></div>
      
      <div className="container">
        <header className="header">
          <h1 className="title">⚡ FUTURISTIC WEBAPP ⚡</h1>
          <p className="subtitle">Next-Gen Web Experience</p>
        </header>

        <main className="main">
          <div className="status-box">
            <div className="status-label">API Status:</div>
            <div className="status-value">{status}</div>
            <div className="status-label">Visitors:</div>
            <div className="status-value">{counter}</div>
            <div className="status-label">Time:</div>
            <div className="status-value">{time}</div>
          </div>

          <div className="card">
            <h2 className="card-title">Interactive Echo</h2>
            <div className="input-group">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleEcho()}
                placeholder="Enter message..."
                className="input"
              />
              <button onClick={handleEcho} disabled={loading} className="btn">
                {loading ? 'PROCESSING...' : 'SEND'}
              </button>
            </div>
            {response && <div className="response">{response}</div>}
          </div>

          <div className="card">
            <h2 className="card-title">AI Assistant</h2>
            <div className="input-group">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAi()}
                placeholder="Ask the AI..."
                className="input"
              />
              <button onClick={handleAi} className="btn">ASK AI</button>
            </div>
            {aiResponse && <div className="response">{aiResponse}</div>}
          </div>

          <div className="card">
            <h2 className="card-title">AI Chatbot</h2>
            <div className="chat-container">
              <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`chat-message ${msg.sender === 'You' ? 'user' : 'ai'}`}>
                    <strong>{msg.sender}:</strong> {msg.text}
                  </div>
                ))}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  placeholder="Chat with AI..."
                  className="input"
                />
                <button onClick={sendChatMessage} className="btn">SEND</button>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-title">Cyberpunk Quote</h2>
            <button onClick={fetchQuote} className="btn">GET QUOTE</button>
            {quote && <div className="response">{quote}</div>}
          </div>

          <div className="card">
            <h2 className="card-title">Controls</h2>
            <button onClick={clearAll} className="btn">CLEAR ALL</button>
            <button onClick={() => { playBeep(); setSoundEnabled(!soundEnabled) }} className="btn">
              {soundEnabled ? '🔊 SOUND ON' : '🔇 SOUND OFF'}
            </button>
            <button onClick={toggleTheme} className="btn">
              {theme === 'cyberpunk' ? '🌙 LIGHT MODE' : '🌟 CYBERPUNK MODE'}
            </button>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Backend</h3>
              <p>FastAPI + Python</p>
            </div>
            <div className="info-card">
              <h3>Frontend</h3>
              <p>React + Vite</p>
            </div>
            <div className="info-card">
              <h3>Style</h3>
              <p>Cyberpunk Neon</p>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>🚀 Running on the edge of the future</p>
        </footer>
      </div>
    </div>
  )
}

export default App
