import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validUsers = [
    { email: "admin@example.com", password: "admin123" },
    { email: "test@example.com", password: "test123" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const match = validUsers.find(
      user => user.email === email && user.password === password
    );

    if (match) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); 
    } else {
      setError("Invalid login credentials. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-xl w-96"
      >
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">
          Login to Tourist Management System
        </h2>

        <label className="block text-gray-700 font-semibold mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          required
        />

        <label className="block text-gray-700 font-semibold mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 duration-200">
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-3">
          Use <b>admin@example.com / admin123</b> or <b>test@example.com / test123</b>
        </p>
      </form>
    </div>
  );
}