import { useState } from "react";
import type z from "zod";

interface PersonInput {
  first_name: string;
  last_name?: string;
  email?: string;
  contact_1?: string;
  contact_2?: string;
  date_of_birth: Date;
  identity_no: string;
  father_id?: string;
  mother_id?: string;
  guardian_id?: string;
}



export const useRegisterForm = () => {
  const [errors, setErrors] = useState<string | null>(null);

  const validateStep = (stepData, schema: z.ZodSchema) => {
    const result = schema.safeParse(stepData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};

      setErrors(result.error);

      return false;
    }

    return true;
  }

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (step === 0) {
        console.log("Sending an email (mock) verification:", formData.email);
        await fakeEmailVerification(formData.email);
        nextStep();
      } else if (step === formSteps.length - 1) {
        console.log("Submitting full registration:", formData);
        setFormData({});
        navigate("/");
      }
    };

  const handleSubmit = async (data: PersonInput) => {
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (data.email && !data.email.includes("@")) {
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