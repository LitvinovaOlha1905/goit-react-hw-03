import React from "react";
import styles from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const ContactSchema = Yup.object().shape({
	username: Yup.string()
		.min(3, "Too Short!")
		.max(50, "To Long!")
		.required("Required"),
	number: Yup.string()
		.matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in the format 459-12-56")
		.required("Required"),
});

const initialValues = {
	username: "",
	number: "",
};

function ContactForm({ onAdd }) {
	const nameId = nanoid();
	const numberId = nanoid();

	const handleSubmit = (values, actions) => {
		// console.log(values);
		onAdd({
			id: nanoid(),
			name: values.username,
			number: values.number,
		});
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={ContactSchema}
		>
			{formikProps => (
				<Form className={styles.form_block}>
					<label htmlFor={nameId}>Name</label>
					<Field type='text' name='username' id={nameId} />
					<ErrorMessage
						name='username'
						component='span'
						className={styles.error}
					/>

					<label htmlFor={numberId}>Number</label>
					<Field type='text' name='number' id={numberId} />
					<ErrorMessage
						name='number'
						component='span'
						className={styles.error}
					/>

					<button className={styles.btn} type='submit'>
						Add Contact
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default ContactForm;
