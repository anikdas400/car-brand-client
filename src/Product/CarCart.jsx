import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CarCart = ({car,cars,setCars}) => {
    const {_id,brand,type,photo,price,description} = car

    const handleDelete = _id =>{
     console.log(_id)
     Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/cars/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your car has been deleted.',
                        'success'
                      )

                    //   remove cart after delete from ui
                      const remaining = cars.filter(car=> car._id !== _id)
                      setCars(remaining)
                }
            })


          
        }
      })
    }
    return (
        <div className="card bg-base-200 shadow-sm p-2">
            <figure><img className="h-64 w-72 mt-2" src={photo} alt="car" /></figure>
            <div className="card-body italic">
                <h2 className="card-title justify-center">
                    
                    <div className="badge badge-secondary text-xl py-3">{brand}</div>
                    <div className="text-indigo-600">{type}</div>
                </h2>
                <p>{description}</p>
                <p className="text-lg font-semibold">Price: $<span className="text-cyan-600">{price}</span></p>
                <div className="card-actions justify-center">
                    <Link to={`/details/${_id}`}>
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">Details</button>
                    </Link>
                    <Link to={`/updatecar/${_id}`}>
                    <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500">Update</button>
                    </Link>
                    <button 
                    onClick={()=>handleDelete(_id)}
                    className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Delete</button>
                    
                </div>
            </div>
        </div>
    );
};

export default CarCart;