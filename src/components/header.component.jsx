import Account from './account.component';
import CustomButton from './custom-button.component';
import CustomLogo from './custom-logo.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user-selectors';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header =({currentUser,history})=>{

    const handleClick=()=>{
        if(currentUser){
            history.push('/notes')
        }else{
            history.push('/account/signin')
        }
    }

    return(
        <div className="w-full flex items-center justify-between bg-white px-2 md:px-12 py-2 md:mb-16 mb-8 border-b-2 border-gray-300">
            <Link to='/'>
                <CustomLogo />
            </Link>
            <div className="w-full max-w-2xl flex items-center justify-end">
                {
                    currentUser
                    ?
                    <>
                        <div onClick={handleClick} className="hidden md:block mr-2">
                            <CustomButton>Go to desk</CustomButton>
                        </div>
                        <Account inverted/>
                    </>
                    :
                    <>
                        <div onClick={handleClick} className="hidden md:block">
                            <CustomButton>Go to desk</CustomButton>
                        </div>
                        <div onClick={()=>history.push('/account/signin')} className="cursor-pointer  border-b-4 border-white hover:border-red-600 mx-4 py-2 font-medium text-gray-600 text-center">Sign in</div>
                    </>
                }
            </div>
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(Header));
