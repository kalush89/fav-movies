import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

import './sign-in-form.styles.scss';

const SignInForm = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
       console.log(user);
    }

    return (
        <div className="sign-in-container">
            <button type='button' onClick={logGoogleUser}>Sign in with google popup</button>
        </div>
    )
};

export default SignInForm;