import { Clock, User as UserIcon, Settings, CreditCard, LogOut } from 'lucide-react'

export default function Account() {
    return (
        <>
            <section className="hero" style={{ height: '300px' }}>
                <h1>My Account</h1>
            </section>
            <main className="container">
                <div className="grid-system" style={{ gridTemplateColumns: '0.8fr 1.2fr' }}>
                    <div className="sidebar">
                        <div className="content-card" style={{ padding: '20px' }}>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2F80ED', fontWeight: '600' }}><UserIcon size={18} /> Profile</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Clock size={18} /> Appointments</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CreditCard size={18} /> Billing</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Settings size={18} /> Settings</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px', color: '#ff4b2b', cursor: 'pointer' }}><LogOut size={18} /> Logout</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-card">
                        <h2 style={{ color: '#1E3A8A', marginBottom: '2rem' }}>Appointment Schedule</h2>
                        <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', background: '#F8FAFC' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ color: '#0F4C81' }}>Consultation: Dr. Sarah Chen</h4>
                                    <p style={{ fontSize: '0.8rem', color: '#666' }}>Senior Dermatologist • Web-Consultation</p>
                                </div>
                                <div style={{ background: '#DCFCE7', color: '#16A34A', padding: '5px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>CONFIRMED</div>
                            </div>
                            <div style={{ marginTop: '15px', display: 'flex', gap: '20px', fontSize: '0.85rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14} /> Oct 24, 2026 • 10:30 AM</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#2F80ED', cursor: 'pointer' }}>Reschedule</div>
                            </div>
                        </div>
                        <button className="cta-btn" style={{ marginTop: '2rem', width: '100%' }}>Book New Appointment</button>
                    </div>
                </div>
            </main >
        </>
    )
}
