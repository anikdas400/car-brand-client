

const CarCart = ({car}) => {
    const {_id,brand,type,photo,price,description,rating} = car
    return (
        <div className="card bg-base-200 shadow-sm">
            <figure><img className="h-64 w-72" src={photo} alt="Shoes" /></figure>
            <div className="card-body italic">
                <h2 className="card-title justify-center">
                    
                    <div className="badge badge-secondary text-xl py-3">{brand}</div>
                    {type}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">Details</button>
                    <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500">Update</button>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Delete</button>
                    {/* <div className="badge "></div>
                    <div className="badge badge-outline">Delete</div> */}
                </div>
            </div>
        </div>
    );
};

export default CarCart;