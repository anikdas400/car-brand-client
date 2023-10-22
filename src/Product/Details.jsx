import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


const Details = () => {
    const car = useLoaderData()
    const {brand,type,photo,price,description} = car
    return (
        <div className="card bg-base-200 shadow-sm">
            <figure><img className="" src={photo} alt="car" /></figure>
            <div className="card-body italic">
                <h2 className="card-title justify-center">
                    
                    <div className="badge badge-secondary text-xl py-3">{brand}</div>
                    <div className="text-indigo-600">{type}</div>
                </h2>
                <p>{description}</p>
                <p className="text-lg font-semibold">Price: $<span className="text-cyan-600">{price}</span></p>
                <div className="card-actions justify-center">
                    <Link to='/'>
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">back to home</button>
                    </Link>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Details;