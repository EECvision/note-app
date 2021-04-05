import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setVerificatonMessage } from '../../redux/user/user-actions';

const EmailVerificationMessage =({history, sendMessage })=>(
    <div className="w-full max-w-lg flex flex-col items-start justify-evenly border-2 border-gray-300 rounded p-6">
        <div className="w-full text-left text-xl text-gray-700 font-serif mb-12">Check your email</div>
        <div className="w-full text-left mb-6 text-gray-600 font-sans">
            A verification message was sent whitch contains a link
            to activate your account 
            Check your spanm folder if you haven't received an
            email wihtin 3 minutes
        </div>
        <button 
            onClick={()=>{ sendMessage() ; history.push('/account/signin')}}
            className="focus:outline-none rounded shadow border-gray-300 text-red-600 font-medium px-6 py-2"
        >
            Sign In
        </button>
    </div>        
)

const mapDispatchToProps = dispatch => ({
    sendMessage: ()=> dispatch(setVerificatonMessage())
})

export default withRouter(connect(null, mapDispatchToProps)(EmailVerificationMessage));
