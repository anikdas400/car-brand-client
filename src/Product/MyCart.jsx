import { useLoaderData } from "react-router-dom";
import CarCart from "./CarCart";
import { useState } from "react";


const MyCart = () => {
    const loadedCars = useLoaderData()
    const [cars,setCars]=useState(loadedCars)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                cars.map(car=><CarCart 
                    key={car._id}
                    car={car}
                    cars={cars}
                    setCars={setCars}
                ></CarCart>)
            }
        </div>
    );
};

export default MyCart;