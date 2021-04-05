import { Link } from 'react-router-dom';
import CustomLogo from '../components/custom-logo.component';
import SignUpFormContainer from '../components/sign-up/sign-up-form.container';

const SignUp=()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Link to='/' className="w-full bg-red-600 py-4 px-6 mb-12"><CustomLogo inverted/></Link>
            <div className="w-full"><SignUpFormContainer /></div>
        </div>
    )        
}


export default SignUp;
