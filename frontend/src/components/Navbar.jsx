import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-10 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold">
        🛒 E-Shop
      </h1>

      <div className="flex gap-8 items-center">

        <Link
          className="hover:text-purple-400"
          to="/"
        >
          Home
        </Link>

        <Link
          className="hover:text-purple-400"
          to="/cart"
        >
          Cart
        </Link>

        <Link
          className="
          border
          px-5
          py-2
          rounded-xl
          hover:bg-white
          hover:text-black
          "
          to="/login"
        >
          Login
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;