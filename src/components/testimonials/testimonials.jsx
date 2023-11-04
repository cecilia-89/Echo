import { reviews } from '../../utils';
import { useRef } from 'react';
import './testimonials.scss'

const Testimonials = () => {

    const slider = useRef()

   //moves testimonial section forward or backward on laptop view
    const slide = (el) => {
        const scrollLength = (window.innerWidth / 290) * 290

        if (el.target.name.includes('forward')) {
            slider.current.scrollBy({left: scrollLength, behavior: "smooth"})

        } else {
            slider.current.scrollBy({left: -scrollLength, behavior: "smooth"})
        }
    }

    return ( 
        <section className="testimonials">
            <div>
                <h1>Customer reviews</h1>
                <p> Take a look at what our valued users have to say about their experiences using Echo. </p>
            </div>

            <ul>
                <li onClick={(el) => slide(el)}><ion-icon name="chevron-back-circle-sharp"></ion-icon></li>
                <li onClick={(el) => slide(el)}><ion-icon name="chevron-forward-circle-sharp"></ion-icon></li>
            </ul>   

            <div ref={slider} className="reviews">
                {reviews.map(review => (
                    <div key={review.id}>
                        <div className='review-wrapper'>
                            <div><img src={review.image} alt="" /></div>

                            <div>
                                <h1>{review.subject}</h1>

                                <div>
                                    <span>{review.name}</span>
                                    <p>{review.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </section>
     );
}

export default Testimonials;