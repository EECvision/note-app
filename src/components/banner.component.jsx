import CustomButton from './custom-button.component';
import { Link } from 'react-router-dom';

const Banner =()=>(
    <div className="w-full max-w-lg flex flex-col items-center justify-center mb-16 px-4">
        <div className="w-full flex flex-col items-center justify-center">
            <div className="text-5xl text-red-700 font-medium text-center leading-none font-serif mb-6">Life is worth more when put together</div>
            <div className="flex flex-col items-center justify-center mb-6">
                <div className="text-center text-gray-700 md:text-lg text-base mb-4">Noteon is a user friendly application that helps you to connect the events going around you together with ease of access from any device, any where</div>
                <div className="text-center text-gray-700 md:text-lg text-base bg-yellow-200">The secret of all intelligence is in history</div>
            </div>
            <div className="flex flex-col items-center text-lg justify-center">
                <div className="flex items-center text-center text-gray-700 text-sm mb-4">
                    Connect your past present and future in just words with Noteon!
                </div>
                <Link to='account/signIn'>
                    <CustomButton>Start free</CustomButton>
                </Link>
            </div>
        </div>
    </div>
);

export default Banner

