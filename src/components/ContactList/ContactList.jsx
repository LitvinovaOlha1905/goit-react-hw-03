import React from "react";
import Contact from "../Contact/Contact";
import styles from './ContactList.module.css'

function ContactList({ contacts, onDelete }) {
	return (
		<div className={styles.contact_list}> 
			{contacts.map(contact => (<Contact key={contact.id} data={contact} onDelete={onDelete}/>))}
		</div>
	);
}

export default ContactList;
