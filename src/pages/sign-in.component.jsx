import { Switch, Route, Link } from 'react-router-dom';
import CustomLogo from '../components/custom-logo.component';
import Login from '../components/login.component';
import ResetPassword from '../components/reset-password.component';

function SignIn({match}){    
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Link to='/' className="w-full bg-red-600 py-4 px-6 mb-16"><CustomLogo inverted/></Link>
            <Switch>
                <Route exact path={`${match.path}`}  component={Login} />
                <Route path={`${match.path}/reset-password`} component={ResetPassword} />
            </Switch>
        </div>
    )
}

export default SignIn;



