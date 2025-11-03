import { useState } from "react";
import { useLoginForm } from "../hooks/useLoginForm";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  const { handleSubmit } = useLoginForm();

  return (
    <section>
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 items-center">
          <label className="font-semibold">User Name</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-row gap-1 items-center">
          <label className="font-semibold">Password</label>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Enter your password"
          />
        </div>
      </form>
    </section>
  );
};
