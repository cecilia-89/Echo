import './footer.scss';

const Footer = () => {
    return ( 
        <section className="footer">
            <div>
                <p>Follow us on social media</p>
                <ul>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                    <li><ion-icon name="logo-youtube"></ion-icon></li>
                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                </ul>
            </div>

            <div>Privacy policy</div>
        </section>
     );
}

export default Footer;