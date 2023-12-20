import React, { useState, useEffect } from 'react';
import Filter from '/components/Filter';
import PersonForm from '../components/PersonForm';
import Persons from '../components/Persons';
import axios from 'axios';


const App = () => {
  const [persons, setPersons] = useState([])
 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [userFilter, setUserFilter] = useState('');

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(userFilter.toLowerCase()))

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3000/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  


  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Check for repeats before adding a new person
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return; // Exit early if a repeat is found
    }

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
