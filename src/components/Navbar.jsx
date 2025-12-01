import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow fixed w-full top-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 text-lg">
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/destinations">Destinations</Link>}
          {isLoggedIn && <Link to="/packages">Packages</Link>}
          {isLoggedIn && <Link to="/itineraries">Itineraries</Link>}
          {isLoggedIn && <Link to="/bookings">Bookings</Link>}
        </div>

        {isLoggedIn && (
          <button 
            onClick={logout} 
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}