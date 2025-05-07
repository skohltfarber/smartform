import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store form values
  const [formValues, setFormValues] = useState({
    box: '',
    dropdown: 'option1',
    radio: 'yes'
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values:', formValues);
    // You can process form data here
    alert('Form submitted! Check console for values.');
  };

  return (
    <div className="App">
      <header className=" ">
        <h1>Simple React Form</h1>
      </header>
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Text Box */}
          <div className="form-group">
            <label htmlFor="box">Text Box:</label>
            <input
              type="text"
              id="box"
              name="box"
              value={formValues.box}
              onChange={handleInputChange}
              placeholder="Enter text here"
            />
          </div>

          {/* Dropdown */}
          <div className="form-group">
            <label htmlFor="dropdown">Dropdown:</label>
            <select
              id="dropdown"
              name="dropdown"
              value={formValues.dropdown}
              onChange={handleInputChange}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* Radio Buttons */}
          <div className="form-group">
            <label>Radio:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="yes"
                  checked={formValues.radio === 'yes'}
                  onChange={handleInputChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="no"
                  checked={formValues.radio === 'no'}
                  onChange={handleInputChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

