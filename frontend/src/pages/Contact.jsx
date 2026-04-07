import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
    return (
        <>
            <section className="hero" style={{ height: '300px' }}>
                <h1>Contact Us</h1>
            </section>
            <main className="container">
                <div className="grid-system">
                    <div className="content-card">
                        <h2 style={{ color: '#1E3A8A', marginBottom: '1.5rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div className="help-item" style={{ color: 'inherit' }}>
                                <div className="icon-circle" style={{ background: '#EFF6FF', color: '#2F80ED' }}><Phone size={20} /></div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#666' }}>Phone Support</div>
                                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>+1 (800) 555-MEDX</div>
                                </div>
                            </div>
                            <div className="help-item" style={{ color: 'inherit' }}>
                                <div className="icon-circle" style={{ background: '#EFF6FF', color: '#2F80ED' }}><Mail size={20} /></div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#666' }}>Email Address</div>
                                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>contact@medixal.ai</div>
                                </div>
                            </div>
                            <div className="help-item" style={{ color: 'inherit' }}>
                                <div className="icon-circle" style={{ background: '#EFF6FF', color: '#2F80ED' }}><MapPin size={20} /></div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#666' }}>Headquarters</div>
                                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>101 Innovation Blvd, CA 94043</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="map-placeholder">
                            <div style={{ textAlign: 'center', color: '#888' }}>
                                <MapPin size={32} style={{ marginBottom: '10px' }} />
                                <p>Global Research HQ: Mountain View, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
