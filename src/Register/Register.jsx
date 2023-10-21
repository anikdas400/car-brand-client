import { useContext, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const [registerError,setRegisterError] = useState('')
    const [success,setSuccess]=useState('')
    const {createUser} = useContext(AuthContext)
    
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password)

        // reset error
        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('Your password should be at least 6 characters')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should be at least one UpperCase character')
            return;
        }
        
        
        // create user in firebase

        createUser(email,password)
        .then(Result=>{
            console.log(Result.user)
            setSuccess('User created successfully')
           
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-semibold">Register now!</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError?  <p className="text-red-700 font-semibold mb-2">{registerError}</p>:
                        <p className="text-green-700 font-semibold mb-2">{success}</p>
                    }
                    <p>Already have an account? <Link className="text-lime-400 font-semibold" to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;