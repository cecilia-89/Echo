import './App.css'
import Navbar from './components/navbar/navbar'
import Testimonials from './components/testimonials/testimonials'
import Pricing from './components/pricing/pricing'
import Contact from './components/contact/contact'
import Features from './components/features/featues'
import Footer from './components/footer/footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}

export default App
