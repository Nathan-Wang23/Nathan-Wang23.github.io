import './App.css';
import NavBar from './components/nav';
import Middle from './components/middle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Middle></Middle>
      </header>
    </div>
  );
}

export default App;
