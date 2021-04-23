import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './sign-in-and-register.styles.scss';
import { ErrorMessageContainer } from './sign-in-and-register.styled';
import { ErrorMessage } from '../../components/styled-components/error.styled.jsx';

import { selectError } from '../../redux/user/user.selectors';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import Register from '../../components/register/register.component';

//## =============== Component =============== ##//

const SignInAndRegisterPage = ({ error }) => (
  <>
    <div className="sign-in-and-register">
      <SignIn />
      <Register />
    </div>
    {error && (
      <ErrorMessageContainer>
        <ErrorMessage>{`${error.message}!!`}</ErrorMessage>
      </ErrorMessageContainer>
    )}
  </>
);

//## =============== Redux =============== ##//

// const mapStateToProps = ({ user: { error } }) => ({
//   error: error,
// });

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

//## =============== Export =============== ##//

export default connect(mapStateToProps)(SignInAndRegisterPage);
