import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Line from './components/Line';

function App() {
  return (
    <>
      <Line />
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
