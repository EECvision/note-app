import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './form-input/form-input.component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart, resetError } from '../redux/user/user-actions';
import { createStructuredSelector } from 'reselect';
import { 
    selectError, 
    selectNewUser
} from '../redux/user/user-selectors';

const Login =({history, match, googleSignInStart, emailSignInStart, error, newUser, resetError})=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit =async event =>{
        event.preventDefault()
        if(!newUser){
            return emailSignInStart({email, password})
        }else if(newUser.email === email && newUser.password === password){
            return emailSignInStart({email, password, displayName:newUser.displayName})
        }else{
            return emailSignInStart({email, password})
        }
    }

    const handleClick =()=>{
        history.push(`${match.path}/reset-password`)
    }

    return(
        <div className="w-full md:max-w-lg flex flex-col items-center justify-center">
            {
                error
                ? <div className="w-full text-left text-lg text-orange-500 font-serif px-4 py-2 shadow mb-4">{error}</div>
                : null
            }
            <form onSubmit={(event)=>handleSubmit(event)} className="w-full flex flex-col items-start justify-evenly border-2 border-white  md:border-gray-300 shadow-lg px-4 md:p-10">
                <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    handleChange={(e)=>setEmail(e.target.value)}
                    required
                    label="email"
                    onFocus={resetError}
                />
                <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    handleChange={(e)=>setPassword(e.target.value)}
                    required
                    label="password"
                    onFocus={resetError}
                />
                <div className="w-full flex flex-col md:flex-row items-center justify-start my-6">
                    <button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-2 md:mr-4 mb-4 focus:outline-none">Login</button>
                    <button type="button" onClick={googleSignInStart} className="w-full md:w-auto focus:outline-none bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 mb-4 focus:outline">Sign in with Google</button>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    <div onClick={handleClick} className="cursor-pointer text-gray-700 text-sx mb-4">Forgot password?</div>
                    <div className="flex items-center justify-end mb-4">
                        <div className="text-gray-700 text-sx mr-2">Don't have an account?</div>
                        <Link to='/account/signup' className="text-red-600 text-lg font-medium">Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>    
    )
} 

const mapDispatchToProps= dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (emailAndPassword) => dispatch(emailSignInStart(emailAndPassword)),
    resetError: ()=> dispatch(resetError())
})

const mapStateToProps = createStructuredSelector({
    error: selectError,
    newUser: selectNewUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
