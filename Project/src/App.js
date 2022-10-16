import {BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Layout/Home';
import Navbar from './Layout/Navbar';
import Gallery from './components/Gallery/Gallery';
import Offers from './components/Offers/Offer';
import Contact from './components/Contact/Contact';
import Footer from './Layout/Footer';
import Openion from './components/Openion';
function App(){
    return(
        <Router>
           <div className='App'>
           <Navbar />
           <div className='content'>
            <Switch>
                <Route exact path="/">
                 <Home />
                 <Footer/>
                </Route>
                <Route path="/Gallary">
                  <Gallery />
                </Route>
                <Route path="/Offers">
                  <Offers />
                </Route>
                <Route path="/Contact">
                  <Contact />
                </Route>
                <Route path="/Openion">
                  <Openion/>
                </Route>
            </Switch>
           </div>

           </div>
        </Router>
    );
}

export default App;