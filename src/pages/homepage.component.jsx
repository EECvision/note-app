import Banner from '../components/banner.component';
import Header from '../components/header.component';

const HomePage =()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <Header/>
            <Banner/>
        </div>
    )
}


export default HomePage;
