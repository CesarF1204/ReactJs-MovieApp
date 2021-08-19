import MyCart from './MyCart';

const MyCartDisplay = (props) => {
    const {title, quantity, price} = props.movie;

    const cartMovieTicketDisplay = props.movie.map( movie => 
        <MyCart key={movie.id} movie={movie} />
    )

    const cartMovieTicketDisplay = movieCarts.map( movie => 
        {
            return  <tr key={movie.id}>
                        <td>{movie.title}</td>
                        <td>{movie.quantity}</td>
                        <td>{movie.price * movie.quantity}</td>
                    </tr>
        }
    )
    
    return(
        <div>
            
        </div>
    )
}

export default MyCartDisplay;