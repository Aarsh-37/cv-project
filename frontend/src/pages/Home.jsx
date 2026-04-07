import { useState } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, RefreshCcw } from 'lucide-react'

export default function Home() {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
            setPreview(URL.createObjectURL(selectedFile))
            setResult(null)
            setError(null)
        }
    }

    const handleUpload = async () => {
        if (!file) return
        setLoading(true)
        setError(null)
        const formData = new FormData()
        formData.append('file', file)
        try {
            const response = await axios.post('http://localhost:8000/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            if (response.data.error) setError(response.data.error)
            else setResult(response.data)
        } catch (err) {
            setError('Connection failed. Link to neural server offline.')
        } finally {
            setLoading(false)
        }
    }

    const reset = () => {
        setFile(null)
        setPreview(null)
        setResult(null)
        setError(null)
    }

    return (
        <main className="container" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="grid-system" style={{ gridTemplateColumns: '1fr' }}>
                <div className="content-card">
                    <h2 style={{ color: '#1E3A8A', marginBottom: '1.5rem' }}>Image Analysis</h2>
                    <div className="scanner-frame">
                        <AnimatePresence mode='wait'>
                            {!preview ? (
                                <motion.div
                                    key="upload"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="upload-zone"
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    <Upload size={40} color="#2F80ED" style={{ marginBottom: '1rem' }} />
                                    <h3 style={{ fontSize: '1.1rem' }}>Click to Upload Target Tissue Image</h3>
                                    <p style={{ color: '#888', fontSize: '0.9rem' }}>Supports PNG, JPG (Max 5MB)</p>
                                    <input id="fileInput" type="file" hidden onChange={handleFileChange} accept="image/*" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="scanner-active"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="preview-container"
                                >
                                    <div className="preview-box">
                                        <img src={preview} alt="Tissue Sample" />
                                        {loading && <div className="scan-line" />}
                                    </div>
                                    <div className="result-panel">
                                        {loading ? (
                                            <div>
                                                <h3 style={{ color: '#2F80ED' }}>In Progress...</h3>
                                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Running cross-layer neural inspection...</p>
                                                <RefreshCcw className="spinning" style={{ marginTop: '1rem', color: '#2F80ED' }} />
                                            </div>
                                        ) : error ? (
                                            <div>
                                                <h3 style={{ color: '#DC2626' }}>Scan Halted</h3>
                                                <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</p>
                                                <button onClick={reset} className="cta-btn" style={{ padding: '0.5rem 1rem' }}>Reset Link</button>
                                            </div>
                                        ) : result ? (
                                            <div>
                                                <h3 style={{ color: '#0F4C81' }}>Analysis Complete</h3>
                                                <div className={`prediction-badge ${result.prediction === 'Leprosy' ? 'status-positive' : 'status-negative'}`}>
                                                    {result.prediction} Detected
                                                </div>
                                                <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#666' }}>
                                                    AI Confidence Level: <strong>{(result.confidence * 100).toFixed(1)}%</strong>
                                                </p>
                                                <button onClick={reset} style={{ marginTop: '1.5rem', background: '#e2e8f0', color: '#1a1a1a', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', cursor: 'pointer' }}>New Scan</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <h3 style={{ color: '#1E3A8A' }}>Data Received</h3>
                                                <p style={{ color: '#666', fontSize: '0.9rem' }}>Visual data link established. Initialize neural processing?</p>
                                                <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
                                                    <button onClick={handleUpload} className="cta-btn">Initialize Scan</button>
                                                    <button onClick={reset} style={{ background: 'none', border: '1px solid #ccc', padding: '0.5rem 1rem', borderRadius: '50px', cursor: 'pointer' }}>Cancel</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    )
}
