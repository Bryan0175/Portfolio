import '../css/footer.css';

const Footer = () => {
    return(
        <footer>
            <div>
                <h2>Brayan Duarte</h2>
                <p>Todos los derechos reservados ©</p>
            </div>
            <ul className="list-footer">
                <li className="list_item-content">
                    <a className="list__item" href="https://www.facebook.com/profile.php?id=100012512077239">
                        <i className="fa cv" aria-hidden="true">CV</i>
                    </a>
                </li>
                <li className="list_item-content">
                    <a className="list__item" href="#">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="list_item-content">
                    <a className="list__item" href="#">
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="list_item-content">
                    <a className="list__item" href="https://www.linkedin.com/in/raj-kumar-web-designer/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </li>
                <li className="list_item-content">
                    <a className="list__item" href="#">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;