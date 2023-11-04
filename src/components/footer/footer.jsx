import './footer.scss';

const Footer = () => {
    return ( 
        <section className="footer">
            <div>
                <p>Follow us on social media</p>
                <ul>
                    <li>
                        <a href="/">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>

            <div>Privacy policy</div>
        </section>
     );
}

export default Footer;