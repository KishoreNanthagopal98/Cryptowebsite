import React from 'react';
import { useSpring, animated } from 'react-spring';
import './descSection.scss'; // Make sure to create and import this CSS file for additional styling

const NostalgiaText = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(100px)' },
    to: { transform: 'translateY(0px)' },
    config: { tension: 280, friction: 60 },
    delay: 500,
  });

  return (
    <div className="nostalgia-container">
			<div className="icon-container">
        <i className="fas fa-gamepad"></i>
				<i className="fas fa-trophy"></i>
        <i className="fas fa-headset"></i>
      </div>
      <animated.div style={fadeIn} className="nostalgia-heading">
			<i className="headingIcon fas fa-headset"></i>  Reignite your inner child  <i className="headingIcon fas fa-gamepad "></i>
      </animated.div>
      <animated.div style={slideIn} className="nostalgia-subheading">
        With the ultimate collection of 90s games.<br /> Experience the joy and excitement of classic gaming all over again!
      </animated.div>

    </div>
  );
};

export default NostalgiaText;
