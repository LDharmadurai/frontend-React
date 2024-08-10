import axios from "axios";
import React, { useState } from "react"
import { useEffect } from "react";
interface Order {
    id: number;
    firstName: string;
    lastName: string;
    description: string;
    quantity: number;
};

//Hardcoded orders
// const Sampleorders: Order[] = [
//     {
//       id: 1,
//       firstName: 'Dharmadurai',
//       lastName: 'L',
//       description: 'Software Developer',
//       quantity: 2,
//     },
//     {
//       id: 2,
//       firstName: 'ABc',
//       lastName: 'cd',
//       description: 'Tester',
//       quantity: 1,
//     },
//     {
//       id: 3,
//       firstName: '123',
//       lastName: 'abc',
//       description: 'BA',
//       quantity: 3,
//     },
//   ];

const Home: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

 useEffect(() => {
    // setOrders(Sampleorders);
    const getOrders = async () =>{
        try{
            const response = await axios.get('http://localhost:5182/api/Orders/GetOrders');
            setOrders(response.data);
        }
        catch(error){
            console.error("Unable to get the orders",error);
        }

    };
    getOrders();
 },[])

const handleDelete = (orderid: number) => {

    try {
        axios.delete(`http://localhost:5182/api/Orders/DeleteOrder/${orderid}`);
        setOrders(orders.filter((order) => order.id != orderid));
    }
    catch (error) {
        console.error('Failed to delete order', error);
    }
};

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map((order) => <li key={order.id}>{order.firstName} {order.lastName} - {order.description} {order.quantity})
                    <button onClick={() => handleDelete(order.id)}></button>
                </li>)}
            </ul>

        </div>
    );
};
export default Home;
