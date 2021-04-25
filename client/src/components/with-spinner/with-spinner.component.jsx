import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    // This way I can pass through the props to the component I wrap
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
