import Header from './components/Header';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import HowWork from './components/pages/HowWork';
import Services from './components/pages/Services';
import Reviews from './components/pages/Reviews';
import Faqs from './components/pages/Faqs';
import Contact from './components/pages/Contact';
import ScrollUpButton from './components/ScrollUpButton'
import Footer from './components/Footer'
import RevealMe from "./components/RevealMe";



const App = () => (
  <div>
    <Header />
    <main className="main">
      <div className="bg__container bg__top_container">
        <RevealMe origin="bottom">
          <Hero/>
        </RevealMe>
        <About />
      </div>
      <HowWork/>
      <div className="bg__container">
        <RevealMe reset origin="left">
          <Services />
        </RevealMe>
      </div>
      <Reviews />
      <div className="bg__container">
        <RevealMe origin="left">
          <Faqs />
        </RevealMe>

        <Contact />
      </div>
    </main>
    <ScrollUpButton />
    <Footer />
  </div>
)


export default App