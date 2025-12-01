import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 mt-20">

      {/* HERO SECTION */}
      <div className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white 
animate-fadeIn">

  <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
    Tourist Management System
  </h1>

  <p className="text-lg max-w-2xl mx-auto opacity-90 animate-slideUp">
    Discover amazing destinations, explore travel packages, and plan your perfect trip.
  </p>

  <Link
    to="/destinations"
    className="mt-6 inline-block bg-white text-blue-700 font-semibold px-6 py-3 
    rounded-lg shadow hover:bg-gray-200 transition-all duration-300"
  >
    Explore Destinations
  </Link>
</div>

      {/* FEATURE CARDS */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 p-6">

       <div className="bg-white shadow-lg p-6 rounded-xl text-center 
transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
          <h2 className="text-xl font-bold mb-2">Destinations</h2>
          <p className="text-gray-600 mb-3">
            View and manage all available tourist destinations.
          </p>
          <Link
            to="/destinations"
            className="text-blue-600 font-medium hover:underline"
          >
            View Destinations →
          </Link>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl text-center 
transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
          <h2 className="text-xl font-bold mb-2">Travel Packages</h2>
          <p className="text-gray-600 mb-3">
            Browse curated travel packages tailored for perfect vacations.
          </p>
          <Link
            to="/packages"
            className="text-blue-600 font-medium hover:underline"
          >
            View Packages →
          </Link>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl text-center 
transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
          <h2 className="text-xl font-bold mb-2">Itineraries</h2>
          <p className="text-gray-600 mb-3">
            Review and manage daily itineraries for your trips.
          </p>
          <Link
            to="/itineraries"
            className="text-blue-600 font-medium hover:underline"
          >
            View Itineraries →
          </Link>
        </div>
      </div>
    </div>
  );
}
