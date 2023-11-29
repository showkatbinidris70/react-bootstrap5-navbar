import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contactus from './components/Contactus';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (<div>
        <Router>
            <div className="pages">
                <Routes>
                    <Route path="/"
                        element={<Home/>}/>
                    <Route path="/about"
                        element={<About/>}/>
                    <Route path="/contact"
                        element={<Contactus/>}/>
                </Routes>
            </div>
        </Router>
        {/* <Footer/> */}
    </div>);
}

export default App;
