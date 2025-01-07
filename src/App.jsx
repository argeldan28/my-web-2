import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
}

export default App;

