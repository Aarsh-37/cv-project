import { ShieldCheck, ArrowRight } from 'lucide-react'
import Auth from '../components/Auth'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Welcome() {
    const { user } = useAuth()

    // If already logged in, redirect to the scanner home page
    if (user) {
        return <Navigate to="/home" replace />
    }

    return (
        <main className="container" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="grid-system" style={{ alignItems: 'center' }}>
                <motion.div
                    className="welcome-text"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#E0E7FF', color: '#4338CA', padding: '8px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                        <ShieldCheck size={18} /> Secure Clinical Portal
                    </div>
                    <h1 style={{ fontSize: '3.5rem', color: '#1E3A8A', lineHeight: '1.2', marginBottom: '1.5rem', fontFamily: 'Poppins, sans-serif' }}>
                        Welcome to <br />
                        <span style={{ color: '#2F80ED' }}>MEDIXAL</span> App
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', maxWidth: '500px' }}>
                        Experience the future of diagnostic screening. Our neural-link skin analysis studio provides rapid, high-confidence assessments for clinical professionals.
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', color: '#555' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowRight size={18} color="#2F80ED" /> AI-powered preliminary assessments</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowRight size={18} color="#2F80ED" /> 3-Class neural core verification</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ArrowRight size={18} color="#2F80ED" /> HIPAA-compliant secure data handling</li>
                    </ul>
                </motion.div>

                <div style={{ padding: '0 20px' }}>
                    <Auth />
                </div>
            </div>
        </main>
    )
}
