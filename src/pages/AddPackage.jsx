import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";

export default function AddPackage() {
  const [form, setForm] = useState({
    packageName: "",
    destinationName: "",
    price: "",
    duration: "",
    description: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/packages", form).then(() => {
      navigate("/packages");
    });
  };

  const fieldLabels = {
    packageName: "Package Name",
    destinationName: "Destination Name",
    price: "Price (₹)",
    duration: "Duration",
    description: "Description",
    image: "Image URL (Optional)"
  };

  return (
    <div className="page-shell">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Add New Package
          </h1>
          <p className="text-slate-600">
            Create a new travel package for your customers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          {Object.keys(form).map((field) => (
            <div key={field}>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {fieldLabels[field] || field}
                {field !== "image" && <span className="text-red-500"> *</span>}
              </label>
              {field === "description" ? (
                <textarea
                  name={field}
                  className="input-field min-h-[120px] resize-y"
                  placeholder={`Enter ${fieldLabels[field] || field.toLowerCase()}...`}
                  value={form[field]}
                  onChange={handleChange}
                  required={field !== "image"}
                />
              ) : (
                <input
                  type={field === "price" ? "number" : field === "image" ? "url" : "text"}
                  name={field}
                  className="input-field"
                  placeholder={`Enter ${fieldLabels[field] || field.toLowerCase()}...`}
                  value={form[field]}
                  onChange={handleChange}
                  required={field !== "image"}
                />
              )}
              {field === "image" && (
                <p className="text-xs text-slate-500 mt-1">
                  Leave empty to use default image based on destination
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
                Add Package
              </span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/packages")}
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
