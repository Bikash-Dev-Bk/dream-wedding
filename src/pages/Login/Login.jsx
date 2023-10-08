import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setPasswordError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero bg-base-200 pt-12 pb-32">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Please Login Here
          </h1>
        </div>
        <div className=" w-full  rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[60px] md:rounded-br-[60px] hover:shadow-2xl hover:shadow-[#8ECDDD] shadow-2xl bg-base-100 pb-8">
          <form onSubmit={handleSubmit} className="card-body">
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

            {success && (
              <p className="text-green-500">
                Successfully login to the account
              </p>
            )}

            {passwordError && (
              <p className="text-red-500">Wrong password or email</p>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-outline border-none bg-[#ff8080] hover:bg-[#f16c6c] text-white">
                Login
              </button>
            </div>
            <p className="text-center font-semibold">Or</p>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline border-none bg-[#ff8080] hover:bg-[#f16c6c] text-white"
            >
              <FcGoogle className="text-2xl" />{" "}
              <span className="ml-2">Sign up with Google</span>{" "}
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
