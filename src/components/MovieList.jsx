
const MovieList = (props) => {
    const {title, year, genre, price, ticket} = props.movie;
    const buyTickets = () => {
        // alert("You ordered x"+ props.movie.quantity + " ticket for: "+ props.movie.title)
        alert("You ordered a ticket for: "+ props.movie.title)
        props.addToCart(props.movie);
    }
    const editBtnClickHandler = () => {
        props.editMovie(props.movie);
    }
    const deleteBtnClickHandler = () => {
        props.deleteMovie(props.movie);
    }

    
    return(
        <tr>
            <td>{title}</td>
            <td>{year}</td>
            <td>{genre}</td>
            <td>₱{price}</td>
            <td>{ticket}</td>
            <td>
                <button className="edit-btn" onClick={editBtnClickHandler}>Edit</button>
                <button className="delete-btn" onClick={deleteBtnClickHandler}>Delete</button>
                <button className="buy-btn" onClick={buyTickets}>Buy</button>
            </td>
        </tr>
    )
}

export default MovieList;