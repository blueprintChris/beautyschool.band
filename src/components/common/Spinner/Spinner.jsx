import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Wrapper } from './styles';

const Spinner = props => {
  const { text } = props;
  return (
    <Wrapper>
      <Loader type='Oval' color='#7f531f' height='100' width='100' />
      <span>{text}</span>
    </Wrapper>
  );
};

export default Spinner;
