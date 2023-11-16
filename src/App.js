import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import HouseGen from './pages/HouseGen'
import HouseGenResults from './pages/HouseGenResults'
import { PackProvier } from './util/state/PackContext';
import 'gestalt/dist/gestalt.css';
import './common/css/houseGen.css'

function App() {
  return (
    <PackProvier>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="house-generate" element={<HouseGen />} />
          <Route path="house-generate/results" element={<HouseGenResults />} />
        </Routes>
      </div>
    </PackProvier>
  );
}

export default App;
