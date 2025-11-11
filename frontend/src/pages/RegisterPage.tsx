import React, { useState } from "react";
import {
  registerUserFields,
  registerPersonFields,
  registerRelativeInfoFields,
} from "../field-links/registerFormFields";
import { useNavigate } from "react-router-dom";
import { useRegisterForm } from "../hooks/useRegisterForm";
import {
  registerRelativeInfoSchema,
  registerPersonSchema,
  registerUserSchema,
} from "../schemas/registerFormSchemas";

export const RegisterPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  const { handleSubmit, validateStep, errors } = useRegisterForm();

  const formSteps = [
    {
      id: 0,
      label: "User Information",
      fields: registerUserFields,
      schema: registerUserSchema,
    },
    {
      id: 1,
      label: "Personal Information",
      fields: registerPersonFields,
      schema: registerPersonSchema,
    },
    {
      id: 2,
      label: "Parent / Guardian Information",
      fields: registerRelativeInfoFields,
      schema: registerRelativeInfoSchema
    },
    {
      id: 2,
      label: "Father Information",
      fields: registerPersonFields,
      schema: registerPersonSchema,
    },
    {
      id: 3,
      label: "Mother Information",
      fields: registerPersonFields,
      schema: registerPersonSchema,
    },
    {
      id: 4,
      label: "Guardian Information",
      fields: registerPersonFields,
      schema: registerPersonSchema,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    const currentStep = formSteps[step];
    const stepData: Record<string, string> = {};

    currentStep.fields.forEach((f) => {
      stepData[f.name] = formData[f.name] || "";
    });

    const isValid = validateStep(stepData, currentStep.schema);
    if (!isValid) return;

    if (step < formSteps.length - 1) {
      setStep((s) => s + 1);
    } else {
      handleSubmit(formData, currentStep.schema);
      navigate("/");
    }
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section>
      <h2 className="text-3xl font-bold">Register</h2>
      <h2 className="text-2xl font-bold mb-4">{formSteps[step].label}</h2>
      <form onSubmit={handleNext} className="flex flex-col gap-3">
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
              {errors[field.name] && (
                <span className="text-red-500 text-sm col-span-2">
                  {errors[field.name]}
                </span>
              )}
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
