import {useState, useEffect} from 'react';
import './App.css';
import Section from './Components/Section';
import Form from './Components/Form';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import shortid from 'shortid'

export default function App() {
  const [contacts, setContacts] = useState(() => { return (JSON.parse(localStorage.getItem('contacts')) ?? [])});
  const [filter, setFilter] = useState('');

  const formSabmitData = ({ name, number }) => {
    const temp = {
      id: `id-${shortid.generate()}`,
      name,
      number
    };
    if (contacts.filter(e => e.name === temp.name).length === 0) {
      setContacts(prevState => ([...prevState , temp]));
    }
    else {
      alert(`${name} уже существует в контактах!`);
    }
  };

  const inputChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
    }
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  
  const filterContacts = name => {
   return contacts.filter(e => e.name.toLowerCase().includes(name.toLowerCase()) );
    
  };

  const deleteContact = id => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== id)));
  };
  return (
      <div className="App">
        <Section title="Телефонная книга">
          <Form onSubmit={formSabmitData}/>
        </Section>
        <Section title="Контакты">
          <Filter filter={filter} inputChange={inputChange}/>
          <ContactList contacts={filterContacts(filter)} onDeleteContact={deleteContact}/>
        </Section>
      </div>
    );
};

