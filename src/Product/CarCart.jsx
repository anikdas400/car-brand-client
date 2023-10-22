import Swal from "sweetalert2";


const CarCart = ({car}) => {
    const {_id,brand,type,photo,price,description,rating} = car

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
                }
            })


          
        }
      })
    }
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
                    <button 
                    onClick={()=>handleDelete(_id)}
                    className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Delete</button>
                    
                </div>
            </div>
        </div>
    );
};

export default CarCart;