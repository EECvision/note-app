import { useEffect } from 'react';
import Banner from '../components/banner.component';
import AppDescription from '../components/app-description';
import Header from '../components/header.component';
import Footer from '../components/footer.component';

const HomePage = () => {
    useEffect(()=>{
        window.sessionStorage.reload = "false";
    })
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Header />
            <Banner />
            <AppDescription />
            <Footer />
        </div>
    )
}

export default HomePage;
