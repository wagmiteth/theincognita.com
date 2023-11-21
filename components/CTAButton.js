// components/CTAButton.js
import React from 'react';

const CTAButton = ({ children, bgColor, fColor, onClick }) => {
  const styles = {
    button: {
      backgroundColor: bgColor || 'var(--color-purple)',
      color: fColor || 'var(--color-white)',
      padding: '6px 16px',
      border: 'solid 2px black',
      borderRadius: '6px',
      cursor: 'pointer',
      boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
      transition: 'transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out',
      fontFamily: 'Bebas Neue',
      fontSize: '10px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal'
    },
    buttonHover: {
      transform: 'translateY(4px) translateX(4px)',
      boxShadow: 'none'
    }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const combinedStyles = isHovered
    ? { ...styles.button, ...styles.buttonHover }
    : styles.button;

  return (
    <button
      style={combinedStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}  // Attach the onClick event handler
    >
      {children}
    </button>
  );
};

export default CTAButton;
