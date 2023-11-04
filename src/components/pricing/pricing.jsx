import './pricing.scss'
import { pricings } from '../../utils';

const Pricing = () => {
    return ( 
        <section className="pricing">
            <div>
                <h1>Pricing</h1>
                <p>Check out pricing list and choose the plan best for you and start video conferincing today!!</p>
            </div>

            <div className='pricing-list'>
                {pricings.map(plan => (
                    <div key={plan.id}  className={plan.popular? 'popular' : 'plan'}>
                        <div>
                            <div className='plan-package'>
                                <h1>{plan.package}</h1>
                                {plan.popular? <div> Best</div> : ''}
                            </div>
                            <span>{plan.description}</span>

                            <div className='plan-price'>
                                <div>{plan.price}</div>
                                <p>{plan.per}</p>
                            </div>
                        </div>

                        <div>
                            <div>{plan.bannerText}</div>
                            <div className='plan-features'>
                                <ul>
                                    {plan.Features.map(feature => (
                                        <li><span>{feature}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}

export default Pricing;