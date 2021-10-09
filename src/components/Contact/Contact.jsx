import React, { useEffect, useState } from 'react';
import { Field } from './styles';

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://got4yfo1jg.execute-api.eu-west-2.amazonaws.com/live/content/text/contact');
      const contacts = await response.json();

      setContacts(contacts);
    })();
  }, []);

  return (
    contacts.length > 0 && (
      <>
        {contacts.map(contact => (
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
    )
  );
};

export default Contact;
