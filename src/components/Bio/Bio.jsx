import React, { useEffect, useState } from 'react';
import { Paragraph } from './styles';

const Bio = () => {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://got4yfo1jg.execute-api.eu-west-2.amazonaws.com/live/content/text/bio');
      const { bio } = await response.json();

      setBio(bio);
    })();
  }, []);

  return bio && <Paragraph>{bio}</Paragraph>;
};

export default Bio;
