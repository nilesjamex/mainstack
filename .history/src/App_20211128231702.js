import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
      <Home />
      </div>
    </div>
  );
}

export default App;
