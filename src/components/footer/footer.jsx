import './footer.scss';

const Footer = () => {
    return ( 
        <section className="footer">
            <div>
                <ul>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                    <li><ion-icon name="logo-snapchat"></ion-icon></li>
                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                </ul>
            </div>

            <div>Privacy plicy</div>
        </section>
     );
}

export default Footer;