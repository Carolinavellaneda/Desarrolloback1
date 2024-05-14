import axios from "axios";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const  URL ='http://localhost:5000/api/clientes/';

const CompoMostrarClientes = () => {

    const [Cliente, setClientes] = useState([])


    useEffect(()=> {
        getclientes()
    }, []);


    // funcion para mostrar los clientes
    const getclientes = async() =>{
        const resul = await axios.get(URL)
        setClientes(resul.data);
    }

    // funcion para mostrar los clientes
    const eliminarClientes = async (id) => {
    await axios.delete(`${URL}${id}`)
        getclientes();
    }
    return(
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Link to='/clientes/agregar' className="btn btn-success mt-2 mb-2"><i className="fa-solid fa-user-plus"></i></Link>
                    <div class ="table-responsive"></div>
                    <table className="table">
                    <thead className="table-light">
                        <tr> 
                        <th> Nombre Clientes </th>
                        <th> Apellido Cliente </th>
                        <th> Cedula </th>
                        <th> Correo </th>
                        <th> Telefono </th>
                        <th> Direccion </th>
                        <th> Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Cliente.map((clientes, index) => (
                            <tr key={index}>
                            <td> {clientes.nombres}</td>
                            <td> {clientes.apellidos}</td>
                            <td> {clientes.cedula}</td>
                            <td> {clientes.correo}</td>
                            <td> {clientes.telefono}</td>
                            <td> {clientes.direccion}</td>
                            <td>

                            <Link to={`/clientes/editar/${clientes._id}`}  className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-user-pen"></i></Link>
                            <button onClick={()=> eliminarClientes(clientes._id)} className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                            </td>
                            </tr>

                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompoMostrarClientes;