import { Helmet } from "react-helmet";
import M from 'materialize-css';
import './App.css'
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import 'materialize-css/dist/css/materialize.min.css'
import HouseGenerator from "./pages/HouseGenerator";
import SimGenerator from "./pages/SImGenerator";

function App() {
  M.AutoInit();
  return (
    <div className="App">
       <Helmet>
         
        {/* <!-- HTML Meta Tags --> */}
        <title>Reticulating Splines</title>
        <meta name="description" content="Home to Sims 4 Random Generators. Randomly generate your next sim or house. Developed by Snikkidoodle."/>

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Reticulating Splines"/>
        <meta itemprop="description" content="Home to Sims 4 Random Generators. Randomly generate your next sim or house. Developed by Snikkidoodle."/>
        <meta itemprop="image" content="https://www.pngitem.com/pimgs/m/80-805791_sims-4-plumbob-png-transparent-png.png"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://reticulatingsplines.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Reticulating Splines"/>
        <meta property="og:description" content="Home to Sims 4 Random Generators. Randomly generate your next sim or house. Developed by Snikkidoodle."/>
        <meta property="og:image" content="https://www.pngitem.com/pimgs/m/80-805791_sims-4-plumbob-png-transparent-png.png"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Reticulating Splines"/>
        <meta name="twitter:description" content="Home to Sims 4 Random Generators. Randomly generate your next sim or house. Developed by Snikkidoodle."/>
        <meta name="twitter:image" content="https://www.pngitem.com/pimgs/m/80-805791_sims-4-plumbob-png-transparent-png.png"/>

      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/posts" element={<PostPage />}/>
        <Route path="/donate" element={<DonatePage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/generators/home" element={<HouseGenerator/>}/>
        <Route path="/generators/sim" element={<SimGenerator/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
