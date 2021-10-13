import React from 'react';
import useApi from '../../hooks/useApi';
import Spinner from '../Spinner/Spinner';
import { contacts as defaultContacts } from '../../static/constants';
import { Field } from './styles';

const Contact = () => {
  const { response: contacts, error, isLoading } = useApi('text/contact');

  if (isLoading) {
    return <Spinner text='Fetching contact details...' />;
  }

  return (
    <>
      {error &&
        defaultContacts.map(contact => (
          <Field key={contact.title}>
            <h2>{contact.title}</h2>
            {contact.emails.map(email => (
              <a href={`mailto:${email}`} key={email}>
                {email}
              </a>
            ))}
          </Field>
        ))}
      {contacts &&
        contacts.map(contact => (
          <Field key={contact.title}>
            <h2>{contact.title}</h2>
            {contact.emails.map(email => (
              <a href={`mailto:${email}`} key={email}>
                {email}
              </a>
            ))}
          </Field>
        ))}
    </>
  );
};

export default Contact;
