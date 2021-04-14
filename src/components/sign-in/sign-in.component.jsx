import React, { useState } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail((email) => (email = ''));
    setPassword((password) => (password = ''));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    if (name === 'email') setEmail((email) => (email = value));
    if (name === 'password') setPassword((password) => (password = value));
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
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
