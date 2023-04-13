import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import SignUpForm from '../../components/Sign-up-form/Sign-up-form';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // Give me the document reference inside db
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
            <SignUpForm />
        </div>
    )
};

export default SignIn;