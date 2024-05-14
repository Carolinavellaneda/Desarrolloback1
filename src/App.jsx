import './App.css'

//importamos los componentes

import CompoMostrarClientes from './Componentes/CompMostrarClientes';
import CompCrearClientes from './Componentes/CompCrearCliente';
import CompEditarClientes from './Componentes/CompEditarClientes';
// importamos Router
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  
  return (

      <div className='App'>
      <header className='container'>
      <nav className="navbar" style={{ backgroundColor:  '#61dafbaa'}}>
  <div className="container-fluid">
    <a href ="/login" className="navbar-brand">Login</a>

    <button
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarNav"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse"id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item"><a href="/clientes" className="nav-link active">Home</a></li>
      <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>
      <li className="nav-item"><a href="/usuarios" className="nav-link">usuarios</a></li>
      <li className="nav-item"><a href="/mascotas" className="nav-link">mascotas</a></li>
      </ul>
    </div>
  </div>
</nav>



        
      </header>

        <BrowserRouter>
        <Routes>
        <Route path='/clientes/' element={<CompoMostrarClientes/>}/>
        <Route path='/clientes/agregar/' element={<CompCrearClientes/>}/>
        <Route path='/clientes/editar/:id' element={<CompEditarClientes/>}/>
        </Routes>   
        </BrowserRouter>
  
      </div>

  )
}

export default App
