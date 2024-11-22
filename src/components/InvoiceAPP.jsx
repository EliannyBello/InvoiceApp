import React from "react";
import getInvoice from "../services/getInvoice";

const InvoceApp = () => {


    const { id, client, company, items } = getInvoice()
    const { name, lastName, address } = client
    const { country, city, street } = client.address

    return (
        <>
            <div className="container justify-content-rigth">

                <h1>Factura</h1>
                <ul className="list-group">
                    <li className="list-group-item">id: {id}</li>
                    <li className="list-group-item">{company.name}</li>

                </ul>

                <h2>Datos del cliente</h2>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{lastName}</li>
                    <li className="list-group-item">{city}</li>
                    <li className="list-group-item">{country}</li>
                    <li className="list-group-item">{street}</li>
                </ul>
        
            <h2>Productos</h2>
            <table className=" table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>

                </thead>
                <tbody>
                    {items.map(item => {
                        return (
                            <tr key={id}>
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                                <td>{item.quantuty}</td>

                            </tr>)
                    })}
                </tbody>
            </table>
            </div>
        </>


    )
}

export default InvoceApp;