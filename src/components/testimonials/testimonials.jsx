import { reviews } from '../../utils';
import './testimonials.scss'

const Testimonials = () => {
    return ( 
        <section className="testimonials">
            <div>
                <h1>Customer reviews</h1>
                <p> Take a look at what our valued users have to say about their experiences using Echo. </p>
            </div>

            <div className="reviews">
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