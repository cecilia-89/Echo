import './contact.scss'

const Contact = () => {
    return ( 
        <section className="contact">
            <div className='contact-wrapper'>
                <div>
                    <div>
                        <h1>Get in touch</h1>
                        <p>We'll love to here from you, let us know how we can help.</p>
                    </div>

                    <div className="form">
                        <form action="" method="post">
                            <div className='names'>
                                <div>
                                    <ion-icon name="person"></ion-icon>
                                    <input type="text" name="firstName" placeholder="First name" id="" />
                                </div>
                                
                                <div>
                                    <ion-icon name="person"></ion-icon>
                                    <input type="text" name="lastName" placeholder="Last name" id="" />
                                </div>
                            </div>

                            <div className='mail'>
                                <ion-icon name="mail"></ion-icon>
                                <input type="email" name="" placeholder="Email" id="" />
                            </div>
                            <div className="message"><textarea placeholder='Enter text here' name="" id="" className='text-message'></textarea></div>
                            <div><button onClick={(e) => e.preventDefault()}>Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Contact;