import './navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="brand">
                    <a className="url" href="#main">about GyuYeon</a>
                </div>
                <ul className="nav-link">
                    <li>
                        <a className="url" href="#aboutme">about me</a>
                    </li>
                    <li>
                        <a className="url" href="#project">projects</a>
                    </li>
                    <li>
                        <a className="url" href="#skills">skills</a>
                    </li>
                </ul>
                <a className="navbar__toggleBtn" href="#!">
                    <i className="fas fa-bars"></i>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;