import Hero from './components/pages/hero';
import About from './components/pages/about';
import Header from './components/header';


const App = () => (
  <div>
    <main className="main">
      <div className="bgContainer">
        <Header />
        <Hero/>
        <About />
      </div>
    </main>
  </div>
)


export default App