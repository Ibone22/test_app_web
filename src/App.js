import { useState, useEffect } from "react"
import FirstComponent from "./components/FirstComponent"
import "./styles.css"

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log("Ejecutandose")
    //consumo de la api de leer productos
    fetch('https://pro-04cx.onrender.com/products', {
      method: "GET"
    }).then(response => response.json()
    .then(data => setProducts(data))
    .catch(err => console.log(err))
    )
    .catch(errorResponse => console.log(errorResponse))
  }, [])

  return (
    <>
      <FirstComponent></FirstComponent>
      <FirstComponent/>
      {products.length === 0 ?
      <h3>No hay productos</h3>:
      products.map(producto => <div key = {producto.name} className="fondo">
      <h3>Nombre: {producto.name}</h3>
      <p>Cantidad: {producto.cantidad}</p>
      <p>Precio: {producto.precio}</p>
      </div>)
      }
    </>
  );
}

export default App;
