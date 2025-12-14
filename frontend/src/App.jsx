import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('loading...')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchStatus()
  }, [])

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/status')
      const data = await res.json()
      setStatus(`${data.service} v${data.version}`)
    } catch (err) {
      setStatus('offline')
    }
  }

  const handleEcho = async () => {
    if (!message.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/echo', {
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

  return (
    <div className="app">
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
