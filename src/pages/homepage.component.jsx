import Banner from '../components/banner.component';
import AppDescription from '../components/app-description';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { connect } from 'react-redux';
import { resetError } from '../redux/user/user-actions';
import { useEffect } from 'react';

const HomePage =({resetError})=>{
    useEffect(()=>{
        resetError()
    },[resetError])

    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Header/>
            <Banner/>
            <AppDescription/>
            <Footer/>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    resetError: ()=> dispatch(resetError())
})

export default connect(null, mapDispatchToProps)(HomePage);
