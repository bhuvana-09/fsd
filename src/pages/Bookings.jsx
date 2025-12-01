import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosInstance";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/bookings").then((res) => {
      console.log("Bookings loaded:", res.data);
      setBookings(res.data);
    });
  }, []);

  const deleteBooking = async (id) => {
  await api.delete(`/bookings/${id}`);
  const updated = await api.get("/bookings");
  setBookings(updated.data);
};



  return (
    <div className="p-6 mt-24">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Bookings</h1>

        <Link
          to="/bookings/add"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          New Booking
        </Link>
      </div>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl 
transition-all duration-300 transform hover:-translate-y-2">
              <h2 className="text-xl font-bold">{b.packageName}</h2>
              <p className="mt-2">Name: {b.name}</p>
              <p>Email: {b.email}</p>
              <p>Phone: {b.phone}</p>
              <p>Travelers: {b.travelers}</p>
              <p>Date: {b.date}</p>

              <button
                onClick={() => deleteBooking(Number(b.id))}

                className="bg-red-600 text-white px-3 py-1 rounded mt-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
