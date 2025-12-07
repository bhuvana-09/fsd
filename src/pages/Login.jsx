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
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">
              Welcome Back
            </h2>
            <p className="text-sm text-slate-600">
              Login to Tourist Management System
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-3 text-base font-semibold"
          >
            Login
          </button>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs text-blue-800 text-center">
              <span className="font-semibold">Demo Credentials:</span>
              <br />
              <span className="font-mono">admin@example.com / admin123</span>
              <br />
              <span className="font-mono">test@example.com / test123</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}