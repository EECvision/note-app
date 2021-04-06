import Account from './account.component';
import CustomLogo from './custom-logo.component';
import { Link } from 'react-router-dom';

export const MainPageHeader = () => {
    return (
        <div className="w-full flex justify-between items-center p-2 md:p-4">
            <Link to='/'><CustomLogo inverted /></Link>
            <Account />
        </div>
    )
}

export const ViewSectionHeader = ({ clickHandler }) => {
    return (
        <div className="w-full flex items-center justify-center shadow-lg">
            <div className="w-full max-w-screen-xl flex justify-between items-center p-2 md:p-4">
                <Link to='/notes'><span className="text-2xl text-red-600 font-bold px-5 hover:bg-red-100 lnr lnr-arrow-left"></span></Link>
                <div className="md:hidden cursor-pointer px-5">
                    <i onClick={clickHandler} className="text-red-600 text-xl far fa-trash-alt"></i>
                </div>
            </div>
        </div>
    )
}

export const EditSectionHeader = ({ clickHandler, history, isUpdating }) => {
    return (
        <div className="w-full flex items-center justify-center shadow-lg">
            <div className="w-full max-w-screen-xl  flex justify-between items-center p-2 md:p-4">
                <Link to='/notes'><span className="text-2xl text-red-600 font-bold px-5 hover:bg-red-100 lnr lnr-arrow-left"></span></Link>
                <div className="cursor-pointer md:hidden px-5">
                    <i onClick={clickHandler} className="text-green-600 text-2xl far fa-check-circle"></i>
                    {
                        isUpdating === "Updating..." ? <span>{isUpdating}</span>
                            : isUpdating === "Done" ? history.push('/notes/view')
                                : null
                    }
                </div>
            </div>
        </div>
    )
}

export const WritePageHeader = ({ clickHandler, isSaving, history }) => {
    return (
        <div className="w-full flex items-center justify-center shadow-lg">
            <div className="w-full max-w-screen-xl flex justify-between items-center p-2 md:p-4">
                <Link to='/notes'><span className="text-2xl text-red-600 font-bold px-5 hover:bg-red-100 lnr lnr-arrow-left"></span></Link>
                <div className="cursor-pointer md:hidden px-5">
                    <i onClick={clickHandler} className="text-green-600 text-2xl far fa-check-circle"></i>
                    {
                        isSaving === "Saving..." ? <span>{isSaving}</span>
                            : isSaving === "Saved" ? history.push('/notes')
                            : null
                    }
                </div>
            </div>
        </div>
    )
}



