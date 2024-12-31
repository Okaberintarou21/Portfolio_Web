import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react'
import './assets/css/style.css';



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading by setting timeout for 700ms
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timeout on unmount to avoid memory leaks
    return () => {
      setLoading(true)
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      {
        loading ? (<div id="preloader"></div>) : (<div></div>)
      }
    </div>
  );
}

export default App;