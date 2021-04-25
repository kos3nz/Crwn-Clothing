import React, { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

//## =============== Component =============== ##//

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);

    // try {
    //   // Authentication step
    //   await auth.signInWithEmailAndPassword(email, password);

    //   // Clearing the form
    //   setEmail('');
    //   setPassword('');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    // if (name === 'email') setEmail(value);
    // if (name === 'password') setPassword(value);

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />

        <div className="buttons">
          {/* <input type="submit" value="Submit Form" /> */}
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

//## =============== Redux =============== ##//

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

//## =============== Export =============== ##//

export default connect(null, mapDispatchToProps)(SignIn);
