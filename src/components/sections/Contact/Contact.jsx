import React, { useContext } from 'react';
import useApi from '../../../hooks/useApi';
import NavContext from '../../../context/NavContext';
import { ContentRow, ContentItem, Spinner } from '../../common';
import { contacts as defaultContacts } from '../../../static/constants';
import { Field } from './styles';

const Contact = () => {
  const { refs } = useContext(NavContext);
  const { response: contacts, error, isLoading } = useApi('text/contact');

  if (isLoading) {
    return <Spinner text='Fetching contact details...' />;
  }

  return (
    <ContentItem header='contact' ref={refs.contact}>
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
    </ContentItem>
  );
};

export default Contact;
