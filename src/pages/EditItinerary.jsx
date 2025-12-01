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
    time: ""
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

  return (
    <div className="max-w-xl mx-auto p-6 mt-24">
      <h1 className="text-2xl font-bold mb-4">Edit Itinerary</h1>

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

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}
