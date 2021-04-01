import Account from './account.component';
import CustomLogo from './custom-logo.component';
import { Link } from 'react-router-dom';

export const MainPageHeader =()=>{
    return (
        <div className="w-full flex justify-between items-center p-2 md:p-4">
            <Link to='/'><CustomLogo inverted/></Link>
            <Account/>
        </div>
    )
}

export const WritePageHeader =()=>{
    return (
        <div className="w-full flex justify-start items-center p-2 md:p-4 shadow-lg">
            <Link to='/notes'><span className="text-2xl text-red-600 font-bold px-5 hover:bg-red-100 lnr lnr-arrow-left"></span></Link>
        </div>
    )
}

