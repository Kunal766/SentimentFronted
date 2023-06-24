import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import happyGif from '../images/happy.gif';
import sadGif from '../images/sad.gif';

const Form = () => {
  const [text, setText] = useState('');
  const [responseValue, setResponseValue] = useState(null);


 
  

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/predict?data=${encodeURIComponent(text)}`,
        null,
        { headers: { Accept: 'application/json' } }
      );
  
      console.log('Response:', response.data);
      setResponseValue(response.data);
  
    } catch (error) {
      console.error('Error:', error);
    }
  
    setText('');
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter your text"
          className="text-area"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
     { responseValue === 4&&
  <img src={happyGif} alt="Happy GIF" className="gif-image" />
}
{
responseValue === 0&&
  <img src={sadGif} alt="Sad GIF" className="gif-image" />
}
    </div>
  );
};

export default Form;
