import { React } from 'react';
import moon from '../images/luna1.png';

function LunarComponent() {
  if (isFullMoon()) {
    return (
      <div>
        <img src={moon} className='homepageImage' alt="" />
        <p>Today is a full moon</p>
      </div>
    )
  } else {
    return <p>Today is not a full moon</p>
  }
}

function isFullMoon() {
  var fullMoonDates = ["2/16/2022", "3/18/2022", "4/16/2022", "5/16/2022", "6/14/2022", "7/13/2022", "8/12/2022", "9/10/2022", "10/9/2022", "11/8/2022", "12/8/2022"];
  var d = new Date().toLocaleDateString();
  console.log(d);
  if (fullMoonDates.includes(d)) {
    return true
  } else {
    return false
  }
}



export default LunarComponent;