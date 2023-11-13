import { useState, useEffect } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
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

  const [Admin, setAdmin] = useState([])
  useEffect(() => {
    console.log("Ejecutandose")
    //consumo de la api de leer productos
    fetch('https://pro-04cx.onrender.com/users/admin', {
      method: "GET"
    }).then(response => response.json()
      .then(data => setAdmin(data))
      .catch(err => console.log(err))
    )
      .catch(errorResponse => console.log(errorResponse))
  }, [])

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<>
          {products.length === 0 ? (
            <h3>No hay productos</h3>
          ) : (
            products.map(producto => (
              <div key={producto.name} className="fondo">
                <h3>Nombre: {producto.name}</h3>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio: {producto.precio}</p>
              </div>
            ))
          )}

        </>} />
        <Route path="/" element={<>
          {Admin.length === 0 ?
            <h3>No hay productos</h3> :
            Admin.map(administrador => <div key={administrador.user} className="fondo">
              <h3>Nombre: {administrador.user}</h3>
              <p>Email: {administrador.email}</p>
            </div>)
          }
        </>} />

        <Route path="*" element={<h1>Pagina no encontrada</h1>} />
      </Routes>

    </HashRouter>
  );
}

export default App;

