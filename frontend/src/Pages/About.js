import React from 'react'
import { Transition } from 'react-transition-group';

function About() {
  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center">
      <div className="container mx-auto pt-0 p-6">
        <Transition in={true} timeout={duration} appear>
          {(state) => (
            <h1
              className={`text-4xl md:text-5xl font-bold text-black mb-4 ${state === 'entered' ? 'animate-fade-in' : ''}`}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              About Us
            </h1>
          )}
        </Transition>
        <p className="text-gray-700 font-semibold">
          Welcome to our website! We are a passionate team dedicated to providing top-notch services.
        </p>
        <p className="text-gray-700 font-semibold">
        Welcome to our food delivery service! At [Company Name], we are passionate about delivering exceptional culinary experiences right to your doorstep. Our journey began with a simple vision: to provide our customers with the finest quality food, prepared with love and attention to detail. 
        Our dedicated team of chefs and food enthusiasts work tirelessly to curate a diverse menu that caters to all tastes and preferences. From savory delights to indulgent desserts, each dish is crafted using the freshest ingredients sourced from local suppliers and farmers. 
        We take pride in ensuring that every bite you take is an explosion of flavors that leaves you craving for more. With our commitment to exceptional service, we strive to exceed your expectations by providing fast, reliable, and convenient delivery. 
        Join us on this culinary adventure and let us bring the joy of great food to your doorstep.
        </p>
        <p className="text-gray-700 font-semibold">
          If you have any questions or inquiries, please feel free to contact us. We are here to help!
        </p>
      </div>
    </div>
  );
}

export default About