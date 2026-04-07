import { Clock } from 'lucide-react'

export default function Services() {
    return (
        <>
            <section className="hero" style={{ height: '300px' }}>
                <h1>Our Services</h1>
            </section>
            <main className="container">
                <div className="content-card" style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <Clock size={64} color="#2F80ED" style={{ marginBottom: '2rem', opacity: 0.5 }} />
                    <h2 style={{ color: '#1E3A8A' }}>Work in Progress</h2>
                    <p style={{ color: '#666', maxWidth: '500px', margin: '1rem auto' }}>
                        We are currently expanding our suite of AI diagnostic services. New screening modules for dermatology and oncology are undergoing clinical validation.
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <span style={{ padding: '5px 15px', background: '#E0E7FF', color: '#4338CA', borderRadius: '20px', fontSize: '0.8rem' }}>Dermatology</span>
                        <span style={{ padding: '5px 15px', background: '#E0E7FF', color: '#4338CA', borderRadius: '20px', fontSize: '0.8rem' }}>Oncology</span>
                        <span style={{ padding: '5px 15px', background: '#F1F5F9', color: '#475569', borderRadius: '20px', fontSize: '0.8rem' }}>Coming Q3 2026</span>
                    </div>
                </div>
            </main>
        </>
    )
}
