import { Link } from 'react-router-dom';

export default function Navbar() {

    const linkStyle = {
        padding: '10px',
        display: 'block',
        fontSize: '20px',
        color: '#EEEEEE',
        fontWeigth: 'bolder',
        textDecoration: 'none',
    };

    const navContainerStyle = {
        backgroundColor: '#00ADB5',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px',
    };

    return (
        <div style={navContainerStyle}>
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/create' style={linkStyle}>Create</Link>
        </div>
    );
}