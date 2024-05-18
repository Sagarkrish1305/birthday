import React from 'react';
import './button.css'; // Import your CSS file

const Button = ({ visibility, onClick }) => {

  const handleOnClick = () =>{
    onClick(!visibility)
  }
  return (
    <button onClick={handleOnClick}>
        Click Me!!
    </button>
  );
};

export default Button;
