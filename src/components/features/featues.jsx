import './features.scss'
import { features } from '../../utils'


const Features = () => {
    return ( 
        <section className="feature">
        
            <div>
                <h1>Our Features: Elevating Your Video Conferencing Experience</h1>
            </div>
                

            <div className='features'>
                {features.map(feature => 
                    <div key={feature.id}>
                        <div className='image-wrapper'>
                            <img src={feature.image} alt="" />
                        </div>
                        
                        <div>
                            <h1>{feature.title}</h1>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                )}
            </div>

        </section>
     );
}

export default Features;