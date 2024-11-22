import React from "react";

const Invoice = {
    id: 50,
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12

        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 2549852,
    },
    items: [
        {
            id: 1,
            product: 'table',
            price: 50,
            quantuty: 4,
        },
        {
            id:2,
            product: 'mouse',
            price: 20,
            quantuty: 10,
        },
        {
            id:3,
            product: 'mousePad',
            price: 15,
            quantuty: 5,
        }
    ],

}

export default Invoice;