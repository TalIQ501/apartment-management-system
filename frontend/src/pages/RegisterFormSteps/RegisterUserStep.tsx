import React from "react";

const inputStylePrimary = "border p-2 rounded";
const labelStylePrimary = "font-semibold";

const registerUserFields = [
  {
    name: "username",
    label: "User Name",
    type: "text",
    placeholder: "Enter your name",
    style: inputStylePrimary,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    style: inputStylePrimary,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    style: inputStylePrimary,
  },
];

export const registerUserStep = ({ formData, handleChange, errors }) => {
  return (
    <>
      {registerUserFields.map((field) => (
        <React.Fragment key={field.name}>
          <label className={labelStylePrimary}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            className={field.style}
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
    </>
  );
};
