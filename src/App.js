import './App.css';
import { NavBar } from './Component/NavBar';
import { Banner } from './Component/Banner';
import { Shloks } from './Component/Shloks';
import { Projects } from './Component/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Shloks /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
