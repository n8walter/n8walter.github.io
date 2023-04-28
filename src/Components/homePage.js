import { React } from 'react';
import '../css/HomePage.css'
import LunarComponent from './lunarComponent';
import internetWater from '../images/internetWater.jpg';


function HomePage() {
  return (
    <>
      <img src={internetWater} className='homepageImage' alt="" />
      <p>Nate React App - more to come</p>
      <div className="lunarCycle">
        <LunarComponent />
      </div>
    </>
  )
};

export default HomePage;