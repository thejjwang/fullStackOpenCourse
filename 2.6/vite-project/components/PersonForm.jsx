import React from "react";

const PersonForm = ({handleFormSubmit, setNewName, setNewNumber}) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
