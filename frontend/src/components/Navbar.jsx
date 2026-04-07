import { Link } from 'react-router-dom'
import { Globe, ChevronDown } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="logo" style={{ textDecoration: 'none' }}>MEDIXAL</Link>
            <ul className="nav-links">
                <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link></li>
                <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
            <div className="nav-actions">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', cursor: 'pointer' }}>
                    <Globe size={16} /> EN
                </div>
                <Link to="/account">
                    <button className="cta-btn">Account</button>
                </Link>
            </div>
        </nav>
    )
}
