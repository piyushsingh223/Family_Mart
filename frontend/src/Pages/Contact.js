import React from 'react'
import { Transition } from 'react-transition-group';

function Contact() {
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
    <div className="bg-blue-300 min-h-screen flex items-center">
      <div className="container mx-auto p-8">
        <Transition in={true} timeout={duration} appear>
          {(state) => (
            <h1
              className={`text-3xl md:text-4xl font-bold mb-4 ${state === 'entered' ? 'animate-fade-in' : ''}`}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              Contact Us
            </h1>
          )}
        </Transition>
        <div className="text-gray-700">
          <p className="mb-4">
            <span className="font-semibold">Email:</span> contact@example.com
          </p>
          <p className="mb-4">
            <span className="font-semibold">Address:</span> 123 Main Street, City, State, ZIP Code
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +1 123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact