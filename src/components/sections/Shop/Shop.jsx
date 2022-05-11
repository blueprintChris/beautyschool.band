import React, { useContext } from 'react';
import NavContext from '../../../context/NavContext';
import useApi from '../../../hooks/useApi';
import { ContentItem, Spinner } from '../../common';
import { Link } from './styles';

const Shop = () => {
  const { refs } = useContext(NavContext);
  const { response, error, isLoading } = useApi('images/merch');

  if (isLoading) {
    return <Spinner text='Fetching shop...' />;
  }

  return (
    <ContentItem header='shop' ref={refs.shop}>
      <Link href='https://store.beautyschool.band/?ffm=FFM_af9227b05d146e1a05145174f6c322c3&ffm=FFM_ec8bf295ac5e8296433e8c7c53b39096' target='_blank'>
        {error && <img src='images/merch-web-450.png' alt='Get Merch' />}
        {response && <img src={`https://beauty-school-content.s3.eu-west-1.amazonaws.com/${response[0].Key}`} alt='Get Merch' />}
      </Link>
    </ContentItem>
  );
};

export default Shop;
