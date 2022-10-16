import './Home.css';
import sky from '../Asset/sky.jpg';
import cut from '../Asset/cut.jpg';
import slider from "react-slick";
import { Settings } from '@mui/icons-material';

const Home = () => {
var Settings={
  dots : true,
  infinite: true,
  speed: 500,
  fade : true,
  cssEase : 'Linear'
};

    return ( 
   <div className = "Home " >
      <div className='grid'>
          <div className='left'>
             <h1>The Beauty of Nature is Everywhere</h1>
             <p>For anyone who wants to enjoy a does of peace and quiet combined with a great location. </p>
          </div>
          <div className='middle'>
          </div>
          <div className='right'><h1>Surf the waves</h1>
              <p>The aquatic plant creates fresh drinking water from seawater. but it is not the limitless source that you are used to in your daily life.</p>
              <p1>EXPLORE NOW &#8594;</p1>
          </div>
      </div>
   </div>
    
   
     );

    } 
export default Home;