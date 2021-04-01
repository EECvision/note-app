import SignUpForm from '../components/sign-up/sign-up-form.component';
import { Link } from 'react-router-dom';
import CustomLogo from '../components/custom-logo.component';

const SignUp=()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Link to='/' className="w-full bg-red-600 py-4 px-6 mb-16"><CustomLogo inverted/></Link>
            <SignUpForm/>
        </div>
    )        
}


export default SignUp;
