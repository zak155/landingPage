import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 border rounded-lg">

   {/* Back button */}
<Link
  to="/"
  className="inline-flex items-center mb-4 group"
>
  <span className="mr-2 text-xl text-gray-700 group-hover:text-white transition">
    ←
  </span>

  <span
    className="
      text-lg font-semibold
      bg-gradient-to-r from-red-500 to-yellow-400
      bg-clip-text text-transparent
      group-hover:text-white
      transition
    "
  >
    Back
  </span>
</Link>



        <h1 className="text-2xl font-semibold mb-4 text-center">
          Create Account
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
  Full Name
</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your name"
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
  Password
</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Create a password"
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
  Confirm Password
</label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
