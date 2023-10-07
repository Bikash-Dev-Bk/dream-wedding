
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

  return (
    <div className="hero bg-base-200 pt-12 pb-32">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Please Register Here
          </h1>
        </div>
        <div className="card  w-full  shadow-2xl bg-base-100 mt-0 pb-6">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline border-none bg-[#ff8080] hover:bg-[#f16c6c] text-white">
                Register
              </button>
            </div>
            <p className="text-center font-semibold">Or</p>
            <button
              className="btn btn-outline border-none bg-[#ff8080] hover:bg-[#f16c6c] text-white"
            >
              <FcGoogle /> <span className="ml-2">Sign up with Google</span>{" "}
            </button>
          </form>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-[#ff8080] font-bold ml-2">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
