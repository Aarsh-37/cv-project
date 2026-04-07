import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { ShieldCheck } from 'lucide-react'

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const { signIn, signUp, signInWithGoogle } = useAuth()

    const handleAuth = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setMessage(null)

        try {
            if (isLogin) {
                const { error } = await signIn({ email, password })
                if (error) throw error
            } else {
                const { error } = await signUp({ email, password })
                if (error) throw error
                setMessage('Check your email for the confirmation link!')
            }
        } catch (err) {
            setError(err.message || 'Authentication failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="content-card" style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <ShieldCheck size={48} color="#2F80ED" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ color: '#1E3A8A', marginBottom: '1.5rem' }}>{isLogin ? 'Patient Login' : 'Create Account'}</h2>

            {error && <div style={{ background: '#FEE2E2', color: '#DC2626', padding: '10px', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}
            {message && <div style={{ background: '#DCFCE7', color: '#16A34A', padding: '10px', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>{message}</div>}

            <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                <div>
                    <label style={{ fontSize: '0.9rem', color: '#555', marginBottom: '5px', display: 'block' }}>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                </div>
                <div>
                    <label style={{ fontSize: '0.9rem', color: '#555', marginBottom: '5px', display: 'block' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                    />
                </div>
                <button type="submit" className="cta-btn" disabled={loading} style={{ width: '100%', marginTop: '10px' }}>
                    {loading ? 'Processing...' : (isLogin ? 'Access Portal' : 'Register')}
                </button>
            </form>

            <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', color: '#888' }}>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
                <span style={{ padding: '0 10px', fontSize: '0.8rem' }}>OR CONTINUE WITH</span>
                <div style={{ flex: 1, height: '1px', background: '#E2E8F0' }}></div>
            </div>

            <button
                onClick={signInWithGoogle}
                style={{
                    width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc',
                    background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '10px', cursor: 'pointer', fontWeight: '500'
                }}
            >
                <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, 27.009001, 39.238998)"><path fill="#4285F4" d="M -3.264 5.106 C -3.264 4.578 -3.313 4.076 -3.402 3.59 L -14.992 3.59 L -14.992 7.625 L -8.423 7.625 C -8.707 8.927 -9.467 10.038 -10.58 10.783 L -10.58 13.415 L -6.657 13.415 C -4.364 11.306 -3.264 8.243 -3.264 5.106 Z" /><path fill="#34A853" d="M -15.003 17.069 C -11.71 17.069 -8.887 15.978 -6.669 13.425 L -10.592 10.793 C -11.794 11.603 -13.312 12.067 -15.003 12.067 C -18.257 12.067 -21.033 9.873 -22.015 6.941 L -26.066 6.941 L -26.066 10.081 C -23.832 14.522 -19.781 17.069 -15.003 17.069 Z" /><path fill="#FBBC05" d="M -22.004 6.929 C -22.251 6.184 -22.389 5.4 -22.389 4.59 C -22.389 3.78 -22.251 2.996 -22.004 2.251 L -22.004 -0.888 L -26.055 -0.888 C -26.985 0.966 -27.509 3.033 -27.509 4.59 C -27.509 6.147 -26.985 8.214 -26.055 10.068 L -22.004 6.929 Z" /><path fill="#EA4335" d="M -15.003 -7.886 C -13.212 -7.886 -11.589 -7.268 -10.323 -6.066 L -6.57 -9.819 C -8.875 -11.967 -11.7 -13.115 -15.003 -13.115 C -19.781 -13.115 -23.832 -10.567 -26.066 -6.126 L -22.015 -2.986 C -21.033 -5.918 -18.257 -7.886 -15.003 -7.886 Z" /></g></svg>
                Sign in with Google
            </button>

            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                {isLogin ? "Don't have an account? " : "Already registered? "}
                <span
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ color: '#2F80ED', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {isLogin ? 'Sign up' : 'Log in'}
                </span>
            </p>
        </div>
    )
}
