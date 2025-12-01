import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosInstance";

export default function Itineraries() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    api.get("/itineraries").then((res) => {
      console.log("Itineraries loaded:", res.data);  // DEBUG
      setItineraries(res.data);
    });
  }, []);

  const deleteItineraries = async (id) => {
  await api.delete(`/itineraries/${id}`);
  const updated = await api.get("/itineraries");
  setItineraries(updated.data);
};


  return (
    <div className="p-6 mt-24">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Itineraries</h1>

        <Link
          to="/itineraries/add"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Itinerary
        </Link>
      </div>

      {itineraries.length === 0 ? (
        <p className="text-gray-600">No itineraries found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itineraries.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl 
transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-xl font-bold">
                Day {item.day}
              </h2>

              <p className="text-gray-700 mt-1">
                Activity: {item.activity}
              </p>

              <p className="text-gray-600 mt-1">
                Destination: {item.destinationName}
              </p>

              <p className="text-gray-600 mt-1">
                Time: {item.time}
              </p>

              <div className="flex gap-3 mt-4">
                <Link
                  to={`/itineraries/edit/${item.id}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteItinerary(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
