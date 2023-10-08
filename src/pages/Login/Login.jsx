
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {

  return (
    <div className="hero bg-base-200 pt-12 pb-32">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Please Login Here</h1>
        </div>
        <div className=" w-full  rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] hover:shadow-2xl hover:shadow-[#8ECDDD] shadow-2xl bg-base-100 pb-8">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-outline border-none bg-[#ff8080] hover:bg-[#f16c6c] text-white">Login</button>
            </div>
            <p className="text-center font-semibold">Or</p>
            <button
              className="btn btn-outline border-none bg-[#ff8080] hover:bg-[#f16c6c] text-white"
            >
              <FcGoogle className="text-2xl" /> <span className="ml-2">Sign up with Google</span>{" "}
            </button>
          </form>
          <p className="text-center">
            New in Dream Wedding?
            <Link to="/register" className="text-[#ff8080] ml-2 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
