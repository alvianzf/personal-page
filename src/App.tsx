import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
// import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <About />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;