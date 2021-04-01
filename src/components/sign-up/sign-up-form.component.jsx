import React from 'react';
import {Link} from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import EmailVerificationMessage from './email-verification.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signUpStart } from '../../redux/user/user-actions';
import { selectSendMessage } from '../../redux/user/user-selectors';

class SignUpForm extends React.Component{
    constructor(){
        super();

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const { signUpStart } = this.props
        
        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }
        signUpStart({displayName, email, password})
    }

    handleChange=event=>{
        const {name, value} = event.target;
        this.setState({[name]:value});
    }    
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="w-full">
                {
                    this.props.sendMessage
                    ?
                    <EmailVerificationMessage/>
                    :
                    <div className="w-full flex flex-col items-center justify-center">
                        <form onSubmit={this.handleSubmit} className="w-full md:max-w-lg flex flex-col items-start justify-evenly border-2 border-gray-300 shadow-lg px-4 md:p-10">
                            <FormInput 
                                type="text"
                                name="displayName"
                                value={displayName}
                                handleChange={this.handleChange}
                                required
                                label="Full Name"
                            />
                            <FormInput 
                                type="email"
                                name="email"
                                value={email}
                                handleChange={this.handleChange}
                                required
                                label="Email"
                            />
                            <FormInput 
                                type="password"
                                name="password"
                                value={password}
                                handleChange={this.handleChange}
                                required
                                label="Password"
                            />
                            <FormInput 
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                handleChange={this.handleChange}
                                required
                                label="Confirm Password"
                            />
                            <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4">
                                <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-2 focus:outline-none md:mr-4 mb-4 md:mb-0" type="submit">Sign Up</button>
                                <div className="flex items-center justify-end">
                                    <div className="text-gray-700 text-sx mr-2">Have an account?</div>
                                    <Link to='/account/signin' className="text-red-600 text-lg font-medium">Sign In</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )        
    }
}

const mapStateToProps = createStructuredSelector({
    sendMessage: selectSendMessage
})

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
