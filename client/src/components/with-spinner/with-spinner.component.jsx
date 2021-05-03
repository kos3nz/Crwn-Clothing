// import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';
import Spinner from '../spinner/spinner.component.jsx';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    // This way I can pass through the props to the component I wrap
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
