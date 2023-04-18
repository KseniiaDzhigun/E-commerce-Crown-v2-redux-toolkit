import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';

import './Sign-in-form.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break
                default:
                    console.log(err);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className='sign-up-container'>
            <h2>Alreaday have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    name='email'
                    onChange={handleChange}
                    value={email} />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    name='password'
                    onChange={handleChange}
                    value={password} />
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;