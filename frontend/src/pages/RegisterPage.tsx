import React, { useState } from "react";
import {
  registerUserFields,
  registerPersonFields,
} from "../field-links/registerFormFields";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const formSteps = [
    { id: 0, label: "User Information", fields: registerUserFields },
    { id: 1, label: "Personal Information", fields: registerPersonFields },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, formSteps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const fakeEmailVerification = async (email: string) => {
    return new Promise<void>((resolve) => {
      console.log("Email (mock) verification to:", email);

      setTimeout(resolve, 1000);
    });
  };

  

  return (
    <section>
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2 p-4">
          {formSteps[step].fields.map((field) => (
            <React.Fragment key={field.name}>
              <label className="font-semibold">{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                className="border p-2 rounded"
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between px-4">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-200 rounded px-3 py-1"
            >
              Back
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-3 py-1"
        >
          {step === formSteps.length - 1 ? "Submit" : "Next"}
        </button>
      </form>
    </section>
  );
};
