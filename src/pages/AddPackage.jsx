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

  return (
    <div className="max-w-xl mx-auto p-6 mt-24">
      <h1 className="text-2xl font-bold mb-4">Add Package</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {Object.keys(form).map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        ))}

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
}
