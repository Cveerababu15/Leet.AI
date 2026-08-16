import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';


import About from './pages/About.jsx';
import Guide from './pages/Guide.jsx';
import  GetStart from './pages/GetStart.jsx';
import LearnMore from './pages/LearnMore.jsx';
import Main from './pages/Main.jsx';


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/Getstart" element={<GetStart />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </main>


      <Footer />
    </div>
  );
}

export default App;
