import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      This is About page
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default About;
