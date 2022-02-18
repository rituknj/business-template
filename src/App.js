import './App.css';
import logo from './fab icon.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          logo <code>EmpowerWit</code> empowering Women in Information technology.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Participate
        </a>
      </header>
    </div>
  );
}

export default App;
