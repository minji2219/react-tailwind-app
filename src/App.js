import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Feature from './components/Feature';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Feedback from './components/Feedback';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Support/>
      <Feature/>
      <Feedback/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
