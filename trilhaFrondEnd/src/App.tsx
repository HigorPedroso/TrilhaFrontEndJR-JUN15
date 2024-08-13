import './App.css'
import FeaturedHeader from './components/featured-header/FeaturedHeader'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hobbies from './components/hobbies/Hobbies'
import Motivation from './components/motivation/Motivation'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <Header />
      <FeaturedHeader />
      <Skills />
      <Hobbies />
      <Motivation />
      <Footer />
    </>
  )
}

export default App
