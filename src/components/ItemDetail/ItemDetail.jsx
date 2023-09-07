import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CarritoContext } from "../../context/CarritoContext";
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img, stock, detalle}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarProducto} = useContext(CarritoContext);


  const controladorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad); 
    alert("productos agregados: " + cantidad);

    const item = {id, nombre, precio, img};
    agregarProducto(item, cantidad);
  }


  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Detalle: {detalle} </p>
        <img src={img} alt={nombre} />

    {
      agregarCantidad > 0 ? (<Link to={"/cart"}> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={controladorCantidad} />)
    }
    
    </div>

  )
}

export default ItemDetail