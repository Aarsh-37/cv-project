import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-col">
                <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>MEDIXAL</div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                    Empowering healthcare through cutting-edge artificial intelligence and human-centric medical research.
                </p>
                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    <Facebook size={18} style={{ cursor: 'pointer' }} />
                    <Twitter size={18} style={{ cursor: 'pointer' }} />
                    <Linkedin size={18} style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className="footer-col">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Case Studies</li>
                    <li>Medical Blog</li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Resources</h4>
                <ul className="footer-links">
                    <li>API Documentation</li>
                    <li>Health Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Support Center</li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Office Info</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                    101 Health Tech Plaza,<br />
                    Innovation District,<br />
                    CA 94043, USA
                </p>
                <p style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>
                    T: +01 234 567 890
                </p>
            </div>
            <div className="footer-bottom">
                &copy; 2026 MEDIXAL AI. All Rights Reserved. Designed with precision for better health tracking.
            </div>
        </footer>
    )
}
