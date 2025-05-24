import logo from './logo.svg';
import dashboard from './assets/dashboard.jpg'
import './App.css';
import Home from './components/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DashboardInfo from './components/dashboard/DashboardInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <DashboardInfo />
        <Home />
      </header>
      <Footer />
    </div>
  );
}

export default App;
