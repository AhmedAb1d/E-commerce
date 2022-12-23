import React, { useState, useEffect } from 'react';

function Sliderer({ children }) {
  // Declare a state variable to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Bind the arrow keys to change the current slide index
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 37 && currentSlide > 0) {
        // Left arrow key: move to the previous slide
        setCurrentSlide(currentSlide - 1);
      } else if (event.keyCode === 39 && currentSlide < children.length - 1) {
        // Right arrow key: move to the next slide
        setCurrentSlide(currentSlide + 1);
      }
    }

    // Add event listener to handle arrow keys
    document.addEventListener('keydown', handleKeyDown);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, children.length]);

  // Render the slides and arrows
  return (
    <div>
      {/* Render the left arrow */}
      {currentSlide > 0 && (
        <button onClick={() => setCurrentSlide(currentSlide - 1)}>
          &lt;
        </button>
      )}

      {/* Render the current slide */}
      {children[currentSlide]}

      {/* Render the right arrow */}
      {currentSlide < children.length - 1 && (
        <button onClick={() => setCurrentSlide(currentSlide + 1)}>
          &gt;
        </button>
      )}
    </div>
  );
}

export default Sliderer