import Header from './components/Header';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import HowWork from './components/pages/HowWork';
import Services from './components/pages/Services';
import Reviews from './components/pages/Reviews';



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
    </main>
  </div>
)


export default App