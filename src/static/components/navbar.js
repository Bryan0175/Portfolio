import Brand from '../img/BrandBlue.svg';
import '../css/navbar.css'

const Navbar = () => {
    return(
        <div className="Navbar">
            <nav className="nav">
                <img src={Brand} className="nav-brand" alt="brand"/>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Projects">Projects</a></li>
                    <li><a href="Skills">Skills</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;