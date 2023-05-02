import SignUpForm from '../../components/Sign-up-form/Sign-up-form';
import SignInForm from '../../components/Sign-in-form/Sign-in-form';
import {AuthenticationContainer} from './Authentication.styles.jsx';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
};

export default Authentication;