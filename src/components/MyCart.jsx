
const MyCart = (props) => {
    const {title, price, quantity} = props.movie;

    return(
        <tr>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>₱{price * quantity}</td>
        </tr>
    )

}

export default MyCart;