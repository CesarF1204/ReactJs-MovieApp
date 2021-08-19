import './App.css';
import MovieApp from './components/MovieApp';
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/movies" component={MovieApp} />
        <Redirect to="/movies/home" />
      </header>
    </div>
  );
}

export default App;
