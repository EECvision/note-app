import CustomButton from './custom-button.component';
import { Link } from 'react-router-dom';
import iconTodo from '../assets/icon-todo.svg';

const Banner = () => (
  <div className="w-full flex justify-center items-center px-4 sm:px-24 2xl:px-0">
    <div className="w-full max-w-screen-lg  flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:max-w-lg flex flex-col justify-center items-start mb-12 md:mb-0">
        <div className="w-full flex flex-col justify-center items-center md:items-start mb-8">
          <span className="w-full text-4xl md:text-5xl leading-tight text-red-600 text-left font-serif mb-4">Life is worth more when put together</span>
          <span className="w-full text-xl md:text-left text-gray-700 font-sans">Connect the events going around you together with ease of access from any device and anywhere.</span>
        </div>
        <Link to='account/signIn'>
          <CustomButton>Start free</CustomButton>
        </Link>
      </div>
      <div className="w-full md:max-w-xl flex items-center justify-end border border-gray-300 rounded">
        <img className="w-full" src={iconTodo} alt="team work" />
      </div>
    </div>
  </div>
);

export default Banner

