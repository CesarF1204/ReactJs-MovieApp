import './App.css';
import MovieApp from './components/MovieApp';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/movies" component={MovieApp}/>
      </header>
    </div>
  );
}

export default App;
