import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css';

const CartItem = ({item, cantidad, img}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <img className="Imagen" src={item.img} alt={item.nombre}></img>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem