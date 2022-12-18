import React, { useState } from "react";
import "./RealEstate.css";

// The component for the Real Estate page
const RealEstate = () => {
  const [investments, setInvestments] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [image, setImage] = useState("");

  // Handles changes to the name input field
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Handles changes to the value input field
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  // Handles changes to the image input field
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  // Handles submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Adds the new investment to the list
    setInvestments([...investments, { name, value, image }]);
    setName("");
    setValue(0);
    setImage("");
  };

  // Handles deletion of an investment
  const handleDelete = (index) => {
    // Removes the investment from the list
    setInvestments(investments.filter((investment, i) => i !== index));
  };

 return (
    <div className="RealEstate">
      {/* The form for adding a new investment */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Value:
          <input type="number" value={value} onChange={handleValueChange} />
        </label>
        <label>
          Image:
          <input type="text" value={image} onChange={handleImageChange} />
        </label>
        <input type="submit" value="Add Investment" />
      </form>
      {/* The list of investments */}
      <ul>
        {investments.map((investment, index) => (
          <li key={index}>
            <img src={investment.image} alt={investment.name} />
            <span>{investment.name} - ${investment.value}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RealEstate;
