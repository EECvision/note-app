import { useState } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user-selectors';
import { signOutStart } from '../redux/user/user-actions';

const Account = ({ currentUser, inverted, signOutStart }) => {
    const [toggleWidth, setToggleWidth] = useState(false)
    const [loading, setLoading] = useState('')
    const handleSignOut = () => {
        window.sessionStorage.reload = "false";
        setLoading('...')
        setTimeout(() => {
            setLoading('')
            signOutStart()
        }, 1000);
    }

    const shortName = () => {
        let name = currentUser.displayName;
        name = name.split(' ');
        name = name[0].charAt(0) + ' ' + name[1].charAt(0)
        return name
    }

    return (
        <div className="w-auto flex flex-col items-end justify-start">
            <button className={`w-auto focus:outline-none border border-red-500 rounded`}>
                <div onClick={() => setToggleWidth(!toggleWidth)} className={`flex items-center justify-center ${inverted ? 'text-red-600' : 'text-white'} px-6 `}>
                    <span className={`mr-2 text-sm font-sans ${inverted ? 'text-gray-700' : 'text-gray-100'}`}>{shortName().toUpperCase()}</span>
                    <span className={`transition duration-500 delay-100 ease-in-out transform ${toggleWidth ? 'rotate-180' : '-rotate-0'}`}><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                </div>
            </button>
            <div className={`w-full absolute ${toggleWidth ? 'flex' : 'hidden'} top-0 left-0 z-50 justify-end transition-all duration-300 ease-in-out mt-20 px-4`}>
                <div className="w-full sm:w-64 rounded-t-md overflow-hidden bg-orange-100 border-b-2 border-orange-500">
                    <div className="w-full py-10 flex flex-col items-center justify-center bg-orange-300">
                        <div className="w-full flex flex-col items-center justify-center my-4">
                            <div className="text-gray-700 font-medium font-sans">{currentUser.displayName}</div>
                            <div className="text-gray-700 font-serif text-sm">{currentUser.email}</div>
                        </div>
                        {/* <div className="cursor-pointer text-gray-700 text-base text-center bg-orange-100 rounded px-2 md:px-6 py-0 md:py-1 font-sans shadow-lg border-b-2 border-gray-500">Manage your Account</div> */}
                    </div>
                    <div className="w-full flex items-center justify-start px-4 py-12">
                        <div className="w-auto cursor-pointer text-gray-600 hover:text-yellow-800 text-base font-serif" onClick={() => handleSignOut()}>Sign Out{loading}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));
