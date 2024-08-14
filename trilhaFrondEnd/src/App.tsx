import { useEffect, useState } from 'react'
import './App.css'
import FeaturedHeader from './components/featured-header/FeaturedHeader'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hobbies from './components/hobbies/Hobbies'
import Loader from './components/loader/Loader'
import Motivation from './components/motivation/Motivation'
import Skills from './components/skills/Skills'
import BackToTop from './components/back-to-top/BackToTop'
import useLocalStorage from 'use-local-storage'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lightTheme, setLightTheme] = useLocalStorage('lightTheme', false);

  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <body data-theme={lightTheme ? 'light' : 'dark'}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header lightTheme={lightTheme} changeTheme={changeTheme} />
          <FeaturedHeader />
          <Skills />
          <Hobbies />
          <Motivation />
          <Footer />
          <BackToTop />
        </>
      )}
    </body>
  );
}

export default App
