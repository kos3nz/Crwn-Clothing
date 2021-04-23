import { useState } from 'react';
import { connect } from 'react-redux';

import './register.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { registerStart, registerFailure } from '../../redux/user/user.actions';

//## =============== Component =============== ##//

const Register = ({ registerStart, registerError, registerFailure }) => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      registerFailure({ message: 'Your password does not match' });
      return;
    }

    registerStart({ displayName, email, password });

    // try {
    //   // Authentication step
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   // Storing the new data into DB
    //   await createUserProfileDocument(user, { displayName });

    //   // Clear the form
    //   setDisplayName('');
    //   setEmail('');
    //   setPassword('');
    //   setConfirmPassword('');
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'displayName':
        setDisplayName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="register">
      <h2 className="title">Do not have a account yet?</h2>
      <span>Register with your email and password</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Register</CustomButton>
      </form>
    </div>
  );
};

//## =============== Redux =============== ##//

const mapDispatchToProps = (dispatch) => ({
  registerStart: (userCredentials) => dispatch(registerStart(userCredentials)),
  registerFailure: (error) => dispatch(registerFailure(error)),
});

//## =============== Export =============== ##//

export default connect(null, mapDispatchToProps)(Register);
