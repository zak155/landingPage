import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Protect route
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  // Get user info
  const userName =
    localStorage.getItem("userName") ||
    localStorage.getItem("userEmail") ||
    "User";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 border rounded-lg text-center w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome, {userName}
        </h1>

        <p className="mb-6 text-sm text-gray-600">
          You are successfully logged in.
        </p>

        <button
          onClick={handleLogout}
          className="w-full bg-black text-white py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
