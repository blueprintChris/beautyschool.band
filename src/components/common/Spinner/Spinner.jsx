import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Wrapper } from './styles';

const Spinner = props => {
  const { text, color } = props;
  return (
    <Wrapper {...props}>
      <Loader type='Oval' color={color ?? '#7f531f'} height='100' width='100' />
      <span>{text}</span>
    </Wrapper>
  );
};

export default Spinner;
