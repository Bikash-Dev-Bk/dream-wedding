
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4xl">Oops!!! </h2>
            <p className="text-2xl my-5">404 Not Found!</p>
            <Link className="bg-[#70bacc] text-white py-3 px-5 rounded-md" to="/">Back home</Link>
        </div>
    );
};

export default ErrorPage;