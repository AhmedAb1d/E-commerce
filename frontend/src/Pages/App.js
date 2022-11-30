import './App.css';
import logo from '../Utils/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Inceptum
        </p>
        <a
          className="App-link"
          href="https://docs.google.com/presentation/d/1BbD8PRGJpBazYToJ7sNPb8br2Eupwcol/edit?usp=sharing&ouid=106270868181880049023&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the presentation
        </a>
      </header>
    </div>
  );
}

export default App;
