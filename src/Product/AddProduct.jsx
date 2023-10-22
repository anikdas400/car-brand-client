import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddCar = event => {
        event.preventDefault()
        const form = event.target
        const brand = form.brand.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating_1.value
        const newCar = {brand,type,photo,price,description,rating}
        console.log(newCar)

        // send data to the server
        fetch('http://localhost:5000/cars',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCar)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'New Car Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] P-8 rounded-lg">
            <h1 className="text-5xl font-bold italic">Add New Car</h1>
            <p className="py-6">Exploring the Cutting-Edge Automotive Landscape: Unveiling QuantumDrive™ Hybrid Electric Vehicles and Their Industry-Leading Peers from Renowned Brands for a Sustainable and Thrilling Future of Mobility.</p>
            <form onSubmit={handleAddCar} className="p-8">
                {/* form row-1-brandName,type */}
                <div className="flex gap-3 mb-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold italic">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold italic">Car Types</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Car Types" name="type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row-2-Photo URL,Price */}
                <div className="flex gap-3 mb-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold italic">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold italic">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Car Price" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row-3-Description, */}
                <div className="flex gap-3 mb-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold italic">Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold italic">Rating Us</span>
                        </label>
                        <label className="input-group">
                            <div className="rating">
                                <input type="radio" name="rating_1" className="mask mask-star" />
                                <input type="radio" name="rating_1" className="mask mask-star" />
                                <input type="radio" name="rating_1" className="mask mask-star" />
                                <input type="radio" name="rating_1" className="mask mask-star" />
                                <input type="radio" name="rating_1" className="mask mask-star" />
                            </div>
                            {/* <input type="text" placeholder="Car Types" name="type" className="input input-bordered w-full" /> */}
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Car" className="btn btn-accent w-full italic" />

            </form>
        </div>
    );
};

export default AddProduct;