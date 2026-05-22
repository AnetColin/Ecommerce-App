import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await API.post("/users/login", {
      email,
      password,
    });

    localStorage.setItem("token", data.token);

    navigate("/");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto mt-10 space-y-4"
    >
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-2 w-full">
        Login
      </button>
    </form>
  );
};

export default Login;
