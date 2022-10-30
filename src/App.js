import './App.css';
import Navbar from "./static/components/navbar";
import Home from './static/components/home'
import About from './static/components/about'
import Projects from "./static/components/projects";
import Skills from "./static/components/skills";
import Contact from "./static/components/contact";
import Footer from "./static/components/footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
