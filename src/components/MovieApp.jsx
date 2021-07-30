import { useState } from 'react';
import AddMovieForm from './AddMovieForm';
import MovieList from './MovieList';
import MyCart from './MyCart'
import { Route, Link } from 'react-router-dom';

const MovieApp = (props) => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Avengers",
            year: 2019,
            genre: "Sci-Fi",
            ticket: 25,
            price: 210
        },
        {
            id: 2,
            title: "Justice League",
            year: 2017,
            genre: "Sci-Fi",
            ticket: 31,
            price: 180
        },
        {
            id: 3,
            title: "The Purge",
            year: 2015,
            genre: "Horror",
            ticket: 22,
            price: 140
        },
        {
            id: 4,
            title: "X-Men",
            year: 2014,
            genre: "Action",
            ticket: 34,
            price: 220
        },
        {
            id: 5,
            title: "Resident Evil",
            year: 2011,
            genre: "Horror",
            ticket: 15,
            price: 150
        },
    ]);
    const [filter, setFilters] = useState('All');
    const [editedMovie, setEditMovie] = useState(null);
    const [movieCarts, setMovieCarts] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const changeDisplay = (e) => {
        setFilters(e.target.value);
    }
    const addMovie = (newMovie) => {
        newMovie.id = movies.length + 1
        let moviesCopy = [...movies];
        moviesCopy.push(newMovie);
        setMovies(moviesCopy);
    }
    const editMovie = (movie) => {
        setEditMovie(movie);
    }
    const updateMovie = (movie) => {
        let moviesCopy = [...movies];
        let index = moviesCopy.findIndex( i => i.id === movie.id);
        moviesCopy[index] = movie;
        setMovies(moviesCopy);
    }
    const deleteMovie = (movie) => {
        let moviesCopy = [...movies];
        moviesCopy = moviesCopy.filter(i => i.id !== movie.id);
        setMovies(moviesCopy);
    }
    const addToCart = (buyTicket) => {
        let orderedMovieTickets = [...movieCarts];
        let index = orderedMovieTickets.findIndex(movie => movie.id === buyTicket.id);
        if(index === -1) {
            buyTicket.quantity = 1;
            orderedMovieTickets.push(buyTicket);
        } else {
            orderedMovieTickets[index].quantity++;
            orderedMovieTickets[index].ticket--;
        }
        setMovieCarts(orderedMovieTickets);
        setCartCount(cartCount + 1);
    }

    const cartMovieTicketDisplay = movieCarts.map( movie => 
        <MyCart key={movie.id} movie={movie} />
    )
    const moviesFiltered = filter === 'All' ? movies : movies.filter(movie => movie.genre === filter || movie.genre === filter);
    const moviesDisplay = moviesFiltered.map( movie => 
        <MovieList key={movie.id} movie={movie} editMovie={editMovie} deleteMovie={deleteMovie} addToCart={addToCart} />
    )

    return(
        <div>
            <Route path="/movies/home">
            <h1>Cinema One</h1>
            <div>
                <div className="links">
                    <Link className="App-link" to="/movies/home">Movies</Link>
                    <Link className="App-link" to="/movies/cart">My Cart({cartCount})</Link>
                </div>
                <AddMovieForm addMovie={addMovie} editMovie={editedMovie} updateMovie={updateMovie}/>
            </div>
                <label htmlFor="filter">Filter: </label>
                <select name="genre" id="filter" onChange={changeDisplay} value={filter}>
                    <option value="All">All</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Action">Action</option>
                    <option value="Horror">Horror</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Animation">Animation</option>
                </select>
                {movies.length === 0 ? <p>No Data To Show</p> :
                <table border="1">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Tickets</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moviesDisplay}
                    </tbody>
                </table>
                }
            </Route>
            
            
            <Route path="/movies/cart" component={MyCart}>
            <Link className="App-link" to="/movies/home">Movies</Link><br/>
                <h1>My Movie Cart</h1>
                {movieCarts.length === 0 ? <p>No Data To Show</p> :
                <table border="1">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartMovieTicketDisplay}
                    </tbody>
                </table>
                }
                
            </Route>
        </div>
    )
}

export default MovieApp;