import  Attractions  from '@mui/icons-material/Attractions';
import SupportAgenticon from '@mui/icons-material/SupportAgent';
import  Hiking  from '@mui/icons-material/Hiking';
import  FitnessCenter  from '@mui/icons-material/FitnessCenter';
const Footer = () => {
    return ( 
        <div className='Footer' >
                <div className='top'>
                    <h1>Adventourus mode?</h1>
                    <p>Our facilities have many amenities that well allow our gustes to drive full satisfction from their stay</p>
                </div>

                <div>
                   <div>
                   <Attractions/>
                    Full Attractions
                   </div>
                   <div>
                  <SupportAgenticon/>
                    Great service
                   </div>
                <div>
                  <Hiking/>
                  Hiking friendly  
                   </div>
                    <div>
                    <FitnessCenter/>
                      Gym availble
                     </div>
                    
        </div>
        </div>
     );
}
 
export default Footer;