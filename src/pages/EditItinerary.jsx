import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiosInstance";

export default function EditItinerary() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    destinationName: "",
    day: "",
    activity: "",
    time: "",
    image: ""
  });

  useEffect(() => {
    api.get(`/itineraries/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/itineraries/${id}`, form).then(() => {
      navigate("/itineraries");
    });
  };

  const fieldLabels = {
    destinationName: "Destination Name",
    day: "Day Number",
    activity: "Activity",
    time: "Time",
    image: "Image URL (Optional)"
  };

  return (
    <div className="page-shell">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Edit Itinerary
          </h1>
          <p className="text-slate-600">
            Update itinerary information and details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          {Object.keys(form).map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {fieldLabels[field] || field}
                {field !== "image" && <span className="text-red-500"> *</span>}
              </label>
              <input
                type={field === "day" ? "number" : field === "image" ? "url" : "text"}
                name={field}
                className="input-field"
                placeholder={`Enter ${fieldLabels[field] || field.toLowerCase()}...`}
                value={form[field]}
                onChange={handleChange}
                required={field !== "image"}
              />
              {field === "image" && (
                <p className="text-xs text-slate-500 mt-1">
                  Update the image URL to change the displayed image. Leave empty to use default.
                </p>
              )}
            </div>
          ))}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 btn-primary py-3 text-base font-semibold"
            >
              <span className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Update Itinerary
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/itineraries")}
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
