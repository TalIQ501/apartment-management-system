import { useState } from "react";
import { z } from "zod";

export const useRegisterForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = <T>(stepData: T, schema: z.ZodSchema): boolean => {
    const result = schema.safeParse(stepData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};

      result.error.issues.map((i) => {
        const field = i.path[0] as string;
        newErrors[field] = i.message;
      });
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const handleSubmit = async <T>(data: T, schema: z.ZodSchema) => {
    setErrors({});

    const isValid = validateStep(data, schema);

    if (!isValid) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Registered successfully: ", data);
    } catch (err) {
      if (err instanceof Error) {
        setErrors({ general: err.message });
      } else {
        setErrors({ general: "Something went wrong" });
      }
    }
  };

  return { handleSubmit, validateStep, errors };
};
