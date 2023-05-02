import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../Form-input/Form-input';
import Button from '../Button/Button';

import {SignUpContainer} from './Sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create the user, email is already in use');
            } else {
                console.log('user creation encountered an error', err)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    name='displayName'
                    onChange={handleChange}
                    value={displayName} />
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
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;