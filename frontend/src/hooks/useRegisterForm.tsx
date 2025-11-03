import { useState } from "react";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const useRegisterForm = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: RegisterData) => {
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!data.email.includes("@")) {
        throw new Error("Invalid Email Address");
      }

      console.log("Registered: ", data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return { handleSubmit, error }
};