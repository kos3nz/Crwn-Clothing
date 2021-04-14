import './sign-in-and-register.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import Register from '../../components/register/register.component';

const SignInAndRegisterPage = () => (
  <div className="sign-in-and-register">
    <SignIn />
    <Register />
  </div>
);

export default SignInAndRegisterPage;
