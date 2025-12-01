import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axiosInstance";

export default function EditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    location: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    api.get(`/destinations/${id}`)
      .then((res) => setForm(res.data))
      .catch(() => alert("Destination not found"));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/destinations/${id}`, form)
      .then(() => {
        alert("Updated successfully!");
        navigate("/destinations");
      })
      .catch(() => alert("Update failed"));
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Edit Destination</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="w-full p-2 border"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          className="w-full p-2 border"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <textarea
          name="description"
          className="w-full p-2 border"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        ></textarea>

        <input
          type="text"
          name="image"
          className="w-full p-2 border"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}
