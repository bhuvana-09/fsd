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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/bookings", form);
      // Show success message
      alert("Booking created successfully!");
      // Navigate to bookings page - it will automatically refresh
      navigate("/bookings");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Failed to create booking. Please try again.");
    }
  };

  return (
    <div className="page-shell">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Create New Booking
          </h1>
          <p className="text-slate-600">
            Add a new customer booking for a travel package
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Select Package <span className="text-red-500">*</span>
            </label>
            <select
              name="packageName"
              value={form.packageName}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">Choose a package...</option>
              {packages.map((p) => (
                <option key={p.id} value={p.packageName}>
                  {p.packageName} - ₹{p.price}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Customer Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              className="input-field"
              placeholder="Enter customer full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              className="input-field"
              placeholder="customer@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              className="input-field"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Number of Travelers <span className="text-red-500">*</span>
              </label>
              <input
                name="travelers"
                type="number"
                min="1"
                className="input-field"
                placeholder="1"
                value={form.travelers}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Travel Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                className="input-field"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 btn-primary py-3 text-base font-semibold"
            >
              <span className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Create Booking
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/bookings")}
              className="btn-secondary py-3 px-6"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
