import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Header />
        <img src="https://www.metaltrader.com/logo.png" className="App-logo" alt="Metal Trader Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      <Home />

      </header>

    </div>
  );
}

export default App;
