import { useLoaderData } from "react-router-dom";
import CarCart from "./CarCart";


const MyCart = () => {
    const cars = useLoaderData()
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {
                cars.map(car=><CarCart 
                    key={car._id}
                    car={car}
                ></CarCart>)
            }
        </div>
    );
};

export default MyCart;