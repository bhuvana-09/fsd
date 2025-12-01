import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosInstance";

export default function Packages() {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    api.get("/packages").then(res => setPackagesData(res.data));
  }, []);

  const deletePackage = async (id) => {
    await api.delete(`/packages/${id}`);
    const updated = await api.get("/packages");
    setPackagesData(updated.data);
  };

  return (
    <div className="p-6 mt-24">
      {/* Header */}
      <div className="flex justify-between mb-6 items-center">
        <h1 className="text-3xl font-extrabold text-gray-800">
          ✈️ Travel Packages
        </h1>

        <Link
          to="/packages/add"
          className="bg-green-600 hover:bg-green-700 transition p-3 px-5 rounded-lg text-white shadow-md"
        >
          ➕ Add Package
        </Link>
      </div>

      {/* Packages List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Image */}
            <img
              src={pkg.image || "https://via.placeholder.com/400?text=No+Image"}
              alt={pkg.packageName}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              {/* Name */}
              <h2 className="text-xl font-bold text-gray-900">
                {pkg.packageName}
              </h2>

              {/* Destination */}
              <p className="text-gray-600 mt-1">{pkg.destinationName}</p>

              {/* Price */}
              <p className="text-lg font-semibold text-green-600 mt-2">
                ₹ {pkg.price}
              </p>

              {/* Description */}
              <p className="text-gray-700 mt-2 line-clamp-3">
                {pkg.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <Link
                  to={`/packages/edit/${pkg.id}`}
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg"
                >
                  ✏ Edit
                </Link>

                <button
                  onClick={() => deletePackage(pkg.id)}
                  className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-lg"
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
