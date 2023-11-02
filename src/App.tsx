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


const App = () => (
  <div>
    <Header />
    <main className="main">
      <div className="bg__container bg__top_container">
        <Hero/>
        <About />
      </div>
      <HowWork/>
      <div className="bg__container">
        <Services />
      </div>
      <Reviews />
      <div className="bg__container">
        <Faqs />
        <Contact />
      </div>
      <ScrollUpButton />
    </main>
    <Footer />
  </div>
)


export default App