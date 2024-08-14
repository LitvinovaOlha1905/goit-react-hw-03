import React from 'react'
import styles from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function Contact({ data: {id, name, number}, onDelete }) {
	return (
		<div className={styles.card_block}>
			<div className={styles.content}>
				<div className={styles.descr}>
					<FaUser />
					<p>{name}</p>
				</div>
				<div className={styles.descr}>
					<FaPhone />
					<p>{number}</p>
				</div>
			</div>
			<button className={styles.btn} onClick={()=>{onDelete(id)}}>Delete</button>
		</div>
	);
}

export default Contact