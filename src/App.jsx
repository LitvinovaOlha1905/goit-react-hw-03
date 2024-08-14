import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import contactsData from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(() => {
		const savedContacts = localStorage.getItem("contacts");
		return savedContacts ? JSON.parse(savedContacts) : contactsData;
	});
  const [filter, setFilter] = useState('')

  useEffect(() => {
	localStorage.setItem("contacts", JSON.stringify(contacts), [contacts])
  })

  const visibleCard = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  const addContact = newContact => {
	setContacts(prevContact => {
		return [...prevContact, newContact];
	})
  }

  const deleteUser = (contactId) => {
	console.log(contactId);
	setContacts(prevContacts => {
		return prevContacts.filter(contact => contact.id !== contactId);
	})
  }

  return (
		<div className='container'>
			<h1>Phonebook</h1>
			<ContactForm onAdd={addContact} />
			<SearchBox value={filter} onFilter={setFilter} />
			<ContactList contacts={visibleCard} onDelete={deleteUser} />
		</div>
	);
}

export default App
