import { useEffect, useState } from 'react'
import './App.css'
import FeaturedHeader from './components/featured-header/FeaturedHeader'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hobbies from './components/hobbies/Hobbies'
import Loader from './components/loader/Loader'
import Motivation from './components/motivation/Motivation'
import Skills from './components/skills/Skills'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <FeaturedHeader />
          <Skills />
          <Hobbies />
          <Motivation />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
