import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/users/register", {
      name,
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto mt-10 space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full"
        onChange={(e) => setName(e.target.value)}
      />

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
        Register
      </button>
    </form>
  );
};

export default Register;
