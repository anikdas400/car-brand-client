import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logOut successfully'))
            .catch(error => {
                console.error(error);
            })
    }
    const navlinks = <>

        <li><NavLink className='text-base hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-emerald-400' to='/'>Home</NavLink></li>
        <li><NavLink className='text-base hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-emerald-400' to='/addproduct'>Add Product</NavLink></li>
        {
            user && <li><NavLink className='text-base hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-emerald-400' to='/mycart'>My Cart</NavLink></li>
        }
        <li><NavLink className='text-base hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-emerald-400' to='/register'>Register</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-24 " src="https://i.ibb.co/N7m9YFs/images.png" alt="" />
                    <h2 className="text-indigo-600 font-bold italic">Drive and Thrive</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                        <img className="w-14 h-14 rounded-full mr-2" src={user?.photoURL} alt="" />
                        <span className="mr-2">{user.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-success"><NavLink to='/'>LogOut</NavLink></button>
                    </> : <button className="btn btn-success"><NavLink to='/login'>Login</NavLink></button>
                }
                
            </div>
        </div>
    );
};

export default Navber;