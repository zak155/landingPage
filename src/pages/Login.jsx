import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Mock authentication
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Redirect after login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 border rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
           <label
  className="
    block mb-1 font-medium
    bg-gradient-to-r from-red-500 to-yellow-400
    bg-clip-text text-transparent
    hover:text-white
    transition
  "
>
  Email
</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
  className="
    block mb-1 font-medium
    bg-gradient-to-r from-red-500 to-yellow-400
    bg-clip-text text-transparent
    hover:text-white
    transition
  "
>
  password
</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Log In
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
