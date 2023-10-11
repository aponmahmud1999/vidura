import logo from './logo.svg';
import './App.css';
import Navbar from './Home/Navbar';
import Banner from './Home/Banner';
import Service from './Home/Service';
import Expertise from './Home/Expertise';
import Gallery from './Home/Gallery';
import Footer from './Home/Footer';

function App() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Service/>
     <Expertise/>
     <Gallery/>
     <Footer/>
    </div>
  );
}

export default App;
