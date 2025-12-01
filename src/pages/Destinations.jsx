import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosInstance";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    api.get("/destinations").then((res) => setDestinations(res.data));
  }, []);

  const deleteDestination = async (id) => {
    await api.delete(`/destinations/${id}`);
    const updated = await api.get("/destinations");
    setDestinations(updated.data);
  };

  // 🔹 Fallback placeholder image
  const placeholder =
    "https://via.placeholder.com/600x400?text=No+Image+Available";

  return (
    <div className="p-6 mt-24">
      <div className="flex justify-between mb-6 items-center">
        <h1 className="text-3xl font-bold text-gray-900">Destinations</h1>

        <Link
          to="/destinations/add"
          className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-lg shadow-md"
        >
          ➕ Add Destination
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            {/* Image with fallback */}
            <img
              src={dest.image || placeholder}
              alt={dest.name}
              className="w-full h-56 object-cover"
              onError={(e) => (e.target.src = placeholder)}
            />

            <div className="p-5">
              {/* Title & Basics */}
              <h2 className="text-xl font-bold text-gray-900">{dest.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{dest.location}</p>
              <p className="text-gray-700 mt-3">{dest.description}</p>

              {/* Buttons */}
              <div className="flex gap-4 mt-5">
                <Link
                  to={`/destinations/edit/${dest.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  ✏ Edit
                </Link>

                <button
                  onClick={() => deleteDestination(dest.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
