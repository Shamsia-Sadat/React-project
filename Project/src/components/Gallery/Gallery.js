import { Diversity1 } from "@mui/icons-material";
import jungle from '../../Asset/jungle.jpg';
import sky2 from '../../Asset/sky2.jpg';
const Gallery = () => {
    return (
        <div className='Gallery'>
              <div class className="left-side">  
                <div> <img src={jungle} alt=" "></img></div>   
                <div> <img src={sky2} alt=" "></img></div>  
                </div> 
              <div className="right-side"><h1>The island is ideal for singles,nature nd sea lovers.</h1>
                       <p>you will have access to the entire island of 2 acres.the nearest nighbour is on the nighboring island,At its best,the<strong>island is perfect for a retreat,whit romantic couplese games or whit a childerens sunset.</strong></p>
              </div>
            
        </div>
      );
}
 
export default Gallery;