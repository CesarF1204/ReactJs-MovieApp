import { useState, useEffect } from 'react';

const AddMovieForm = (props) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [ticket, setTicket] = useState('');
    const [price, setPrice] = useState('');

    const btnClickHandler = () => {
        if (props.editMovie) {
            updateMovie();
        } else {
            addNewMovie();
        }
    }

    const addNewMovie = () => {
        let newMovie = {
            title: title,
            year: year,
            genre: genre,
            ticket: ticket,
            price: price
        }
        if(title.trim() === '' || year === '' || genre.trim() === '' || ticket === '' || price === '') {
            alert('Please input a valid entry.');
        }
        else if(year < 0 || ticket < 0 || price < 0) {
            alert('No negative values. Please try again.');
        }
        else {
            props.addMovie(newMovie);
            setTitle('');
            setYear('');
            setTicket('');
            setPrice('');
        }
        
    }
    
    useEffect( () => {
        if(props.editMovie) {
            setTitle(props.editMovie.title);
            setYear(props.editMovie.year);
            setGenre(props.editMovie.genre);
            setTicket(props.editMovie.ticket);
            setPrice(props.editMovie.price);
        }
    }, [props.editMovie]);

    const updateMovie = () => {
        let updatedMovie = {
            id: props.editMovie.id,
            title: title,
            year: year,
            genre: genre,
            ticket: ticket,
            price: price
        }
        if(title.trim() === '' || year === '' || genre.trim() === '' || ticket === '' || price === '') {
            alert('Please input a valid entry.');
        }
        else if(year < 0 || ticket < 0 || price < 0) {
            alert('No negative values. Please try again.');
        }
        else {
        props.updateMovie(updatedMovie);
        }
    }

    return(
        <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="year">Year: </label>
            <input type="number" name="year" id="year" min="1900" max="2099" step="1" value={year} onChange={(e) => setYear(e.target.value)} />
            <label htmlFor="genre">Genre: </label>
            <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                <option>--Select Genre--</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Adventure">Adventure</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Comedy">Comedy</option>
                <option value="Animation">Animation</option>
            </select>
            <label htmlFor="ticket">Ticket: </label>
            <input type="number" name="ticket" id="ticket" min="1" value={ticket} onChange={(e) => setTicket(e.target.value)} />
            <label htmlFor="price">Price: </label>
            <input type="number" name="price" id="price" min="1" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={btnClickHandler} className="add-edit-btn">{props.editMovie ? 'Edit Movie' : 'Create'}</button>
        </div>
    )
}

export default AddMovieForm;