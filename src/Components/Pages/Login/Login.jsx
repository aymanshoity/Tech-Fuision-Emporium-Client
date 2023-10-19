import { Link } from "react-router-dom";
import { FaGoogle} from "react-icons/fa6";

const Login = () => {

    const handleSignIn=e=>{
        e.preventDefault()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col my-20">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10">
                        <form onSubmit={handleSignIn} className="card-body">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt">Newto this Website? Go the the <Link to='/register' className="label-text-alt link link-hover text-red-600">Register Page</Link></p>
                                </ label>
                                {/* { errorMessage && <p className="text-red-600">{errorMessage}</p>}
                                {successMessage && <p className="text-red-600">{successMessage}</p>} */}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-600 text-white">Login</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        
                        <button className="btn bg-blue-600 text-white"> <FaGoogle className=" text-white"></FaGoogle> Google Login</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;