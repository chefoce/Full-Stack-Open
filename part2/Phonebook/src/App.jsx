import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  
  const handleChangePhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var repeatName = false;
    persons.map((person) => {
      if(JSON.stringify(person.name) === JSON.stringify(newName)){
        alert(`${newName} is already added to phonebook`)
        repeatName = true;
      }})
    if(repeatName === false){
      const personToAddToState = {
        name: newName,
        number: newPhone
      }
      setPersons(persons.concat(personToAddToState));
    }
    setNewName('')
    setNewPhone('')
  };

  const handlefilter = (event) => {
    setNewFilter(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter show with: <input type='text' onChange={handlefilter} value={newName} />
        </div>
      <form onSubmit={handleSubmit} >
        <div>
          Name: <input type='text' onChange={handleChangeName} value={newName} />
        </div>
        <div>
          Number: <input type='number' onChange={handleChangePhone} value={newPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}</div>
    </div>
  )
}

export default App