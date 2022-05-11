import React, { useContext } from 'react';
import { ContentItem } from '../../common';
import { Paragraph } from './styles';
import NavContext from '../../../context/NavContext';

const Bio = () => {
  const { refs } = useContext(NavContext);
  // const { response, error, isLoading } = useApi('text/bio');

  // if (isLoading) {
  //   return <Spinner text='Fetching bio...' />;
  // }

  return (
    <ContentItem header='bio' ref={refs.bio}>
      <Paragraph>
        Beauty School are a 5-piece band from the UK that fuse a diverse pool of influences to make eloquent emo-infused alternative-rock. Formed out of a
        number of members of Leeds bands with unfinished business, the band’s debut album ‘Happiness’ is an example of a group drawing from multiple areas of
        inspiration and experiences to make an album bursting with pent-up energy, interlaced with the deft lyrical touch of lead singer Joe Cabrera. Produced
        by James Kenosha (Dinosaur Pile-Up / Pulled Apart by Horses) Beauty School have interpreted sounds from pop-punk, alt-rock, and indie-rock and forged a
        record that finds a home in each genre without feeling out of place or over-indulgent. Having sold out their debut Leeds headline show in August 2021
        the band will release ‘Happiness’ to the world via Slam Dunk Records in September 2022.
        {/* {error && bio}
        {response && response.bio} */}
      </Paragraph>
    </ContentItem>
  );
};

export default Bio;
