import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    //  password validation
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters.");
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please add at least one special character");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please add at least one capital letter");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        toast.success("User Created Successfully!");
        const user = result.user;
        form.reset();
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
        console.log('register page',user);
      })
      .catch((error) => {
        setPasswordError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("User Created Successfully!");
        const user = result.user;
        setTimeout(() => {
          navigate('/');
        }, 2000);
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero bg-base-200 pt-12 pb-32">
      <ToastContainer position="top-center" />
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Please Register Here
          </h1>
        </div>
        <div className=" w-full rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] hover:shadow-2xl hover:shadow-[#8ECDDD] shadow-2xl bg-base-100 mt-0 pb-8">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="ring-1 ring-gray-300 px-4 py-3 mt-2 rounded-full outline-none focus:ring-2 focus:ring-[#8ECDDD]"
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
                placeholder="Email"
                className="ring-1 ring-gray-300 px-4 py-3 mt-2 rounded-full outline-none focus:ring-2 focus:ring-[#8ECDDD]"
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
                placeholder="Password"
                className="ring-1 ring-gray-300 px-4 py-3 mt-2 rounded-full outline-none focus:ring-2 focus:ring-[#8ECDDD]"
                required
              />
            </div>

            <p className="text-rose-600">{passwordError}</p>
            
            <div className="form-control mt-6">
              <button className="btn rounded-full  text-white bg-[#ff8080] hover:bg-white hover:border-2 hover:border-[#f16c6c] hover:text-[#f16c6c]">
                Register
              </button>
              
            </div>
            <p className="text-center font-semibold">Or</p>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline rounded-full border-2 border-[#f16c6c]  hover:bg-[#ff8080] hover:text-white hover:border-none ">
            
              <FcGoogle className="text-2xl" />{" "}
              <span className="ml-2">Sign up with Google</span>{" "}
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
