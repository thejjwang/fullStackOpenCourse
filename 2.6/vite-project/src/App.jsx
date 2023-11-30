import React, { useState } from 'react';
import Filter from '/components/Filter';
import PersonForm from '../components/PersonForm';
import Persons from '../components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [userFilter, setUserFilter] = useState('');

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(userFilter.toLowerCase()))

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Check for repeats before adding a new person
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return; // Exit early if a repeat is found
    }

    // Add the new person to the list
    setPersons((prevPersons) => [...prevPersons, { name: newName, number: newNumber }]);
    setNewName('');
    setNewNumber('');
    setUserFilter('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setUserFilter={setUserFilter}/>
      <h2>add a new</h2>
      <PersonForm handleFormSubmit={handleFormSubmit} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
      {/* <div>debug: {newName} {newNumber} {userFilter}</div> */}
    </div>
  );
};

export default App;
