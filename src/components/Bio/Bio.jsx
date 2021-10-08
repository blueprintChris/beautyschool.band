import React, { useEffect, useState } from 'react';
import { Paragraph } from './styles';

const Bio = () => {
  const [bio, setBio] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('https://got4yfo1jg.execute-api.eu-west-2.amazonaws.com/live/text/bio/bio');
      const body = await response.text();

      setBio(body);
    })();
  }, []);

  return bio && <Paragraph>{bio}</Paragraph>;
};

export default Bio;
