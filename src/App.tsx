import Header from './components/Header';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import HowWork from './components/pages/HowWork';



const App = () => (
  <div>
    <Header />
    <main className="main">
      <div className="bgContainer">
        <Hero/>
        <About />
      </div>
      <HowWork/>
    </main>
  </div>
)


export default App