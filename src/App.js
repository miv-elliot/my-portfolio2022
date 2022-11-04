import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Newsletter from './Components/Newsletter'
import Cards from './Components/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
