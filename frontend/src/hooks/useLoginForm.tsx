import type { FormEvent } from "react";

export const useLoginForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return { handleSubmit };
};
