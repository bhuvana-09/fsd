import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";

export default function AddBooking() {
  const [packages, setPackages] = useState([]);
  const [form, setForm] = useState({
    packageName: "",
    name: "",
    email: "",
    phone: "",
    travelers: "",
    date: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/packages").then((res) => setPackages(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/bookings", form).then(() => navigate("/bookings"));
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-24">
      <h1 className="text-2xl font-bold mb-4">Add Booking</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        
        <select
          name="packageName"
          value={form.packageName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Package</option>
          {packages.map((p) => (
            <option key={p.id} value={p.packageName}>
              {p.packageName}
            </option>
          ))}
        </select>

        <input
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full p-2 border rounded"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="travelers"
          placeholder="Number of Travelers"
          className="w-full p-2 border rounded"
          value={form.travelers}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          className="w-full p-2 border rounded"
          value={form.date}
          onChange={handleChange}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Book Now
        </button>
      </form>
    </div>
  );
}
