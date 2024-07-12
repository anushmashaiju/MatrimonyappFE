import React, { useEffect } from 'react';
import './Subscription.css';
import MainNavbar from '../MainNavbar';

const Subscription = () => {
  const plans = [
    {
      name: 'Gold',
      duration: '3 Months',
      discount: '50% off',
      originalPrice: '₹4,540',
      price: '₹2,269',
      pricePerMonth: '₹757 per month',
      features: [
        'Send unlimited Messages',
        'View upto 75 Contact Numbers',
      ],
    },
  
    {
      name: 'Diamond',
      duration: '6 Months',
      discount: '55% off',
      originalPrice: '₹6,520',
      price: '₹2,934',
      pricePerMonth: '₹489 per month',
      features: [
        'Send unlimited Messages',
        'View upto 150 Contact Numbers',
      ],
    },
   
    {
      name: 'Platinum ',
      duration: '12 Months',
      discount: '60% off',
      originalPrice: '₹13,304',
      price: '₹5,321',
      pricePerMonth: '₹443 per month',
      features: [
        'Send unlimited Messages',
        'View upto 600 Contact Numbers',
        'Standout from other Profiles',
        'Let Matches contact you directly',
      ],
    },
  ];
  useEffect(() => {
    // Add the background class to the body
    document.body.classList.add('body-background');

    // Remove the background class when the component is unmounted
    return () => {
        document.body.classList.remove('body-background');
    };
}, []);
  return (
    <><MainNavbar/>
    <div className="subscription-page">
      <div className="header">
        <h1>Upgrade now & Get upto 60% discount!</h1>
        <p>Save upto 50% on Premium Plans! Valid for limited period!</p>
      </div>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h2>{plan.name} <span>{plan.duration}</span></h2>
            <p className="discount">{plan.discount} <span>{plan.originalPrice}</span></p>
            <p className="price">{plan.price}</p>
            <p className="price-per-month">{plan.pricePerMonth}</p>
            <button className="continue-button">Continue</button>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Subscription;
