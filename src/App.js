import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import HouseGen from './pages/HouseGen'
import HouseGenResults from './pages/HouseGenResults'
import Header from './components/Header'
import Footer from './components/Footer'
import SimGen from './pages/SimGen'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import { PackProvider } from './util/state/PackContext';
import 'gestalt/dist/gestalt.css';
import './common/css/houseGen.css'

function App() {
  return (
    <PackProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sim-generate" element={<SimGen />}/>
          <Route path="/donate" element={<Donate />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="house-generate" element={<HouseGen />} />
          <Route path="house-generate/results" element={<HouseGenResults />} />
        </Routes>
        <Footer />
      </div>
    </PackProvider>
  );
}

export default App;
