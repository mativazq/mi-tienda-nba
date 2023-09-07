import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
        <div>
            <button onClick={sumar} className="miBtn">Agregar</button>
            <p className="parrafo"> {contador} </p>
            <button onClick={restar} className="miBtn">Quitar</button>
        </div>
        <button className="btnAgregar" onClick={() => funcionAgregar(contador) }>Agregar al Carrito</button>
    </>
  );
};

export default ItemCount;
