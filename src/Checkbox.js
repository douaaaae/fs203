import React, { useRef, useState } from 'react';
import './CheckboxForm.css'; // Include the CSS file

function CheckboxForm() {
  const checkboxRefs = useRef([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSelectAll = () => {
    checkboxRefs.current.forEach((checkbox) => {
      checkbox.checked = true;
    });
    updateSelectedSkills();
  };

  const handleDeselectAll = () => {
    checkboxRefs.current.forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateSelectedSkills();
  };

  const updateSelectedSkills = () => {
    const selected = checkboxRefs.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    setSelectedSkills(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected skills: ${selectedSkills.join(', ')}`);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="checkbox-form">
        <h3>Select your skills</h3>
        <label>
          <input
            type="checkbox"
            value="React"
            ref={(el) => (checkboxRefs.current[0] = el)}
            onChange={updateSelectedSkills}
          />
          React
        </label>
        <label>
          <input
            type="checkbox"
            value="Node.js"
            ref={(el) => (checkboxRefs.current[1] = el)}
            onChange={updateSelectedSkills}
          />
          Node.js
        </label>
        <label>
          <input
            type="checkbox"
            value="JavaScript"
            ref={(el) => (checkboxRefs.current[2] = el)}
            onChange={updateSelectedSkills}
          />
          JavaScript
        </label>
        <div className="button-group">
          <button type="button" onClick={handleSelectAll} className="action-button">
            Select All
          </button>
          <button type="button" onClick={handleDeselectAll} className="action-button">
            Deselect All
          </button>
        </div>
        <p className="selected-skills">
          Selected Skills: <span>{selectedSkills.join(', ') || 'None'}</span>
        </p>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckboxForm;
