import Navbar from './Navbar';

export default function Layout({children}) {

    const containerStyle = {
        width: '100%',
        margin: '10px auto',
    };

    return (
        <div>
            <Navbar/>
            <div style={containerStyle}>{children}</div>
        </div>
    );
}