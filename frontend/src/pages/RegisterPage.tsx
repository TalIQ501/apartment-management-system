import React from "react";
import {
  registerPersonFields,
  registerUserFields,
} from "../field-links/RegisterFormFields";

export const RegisterPage = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold">Register</h2>
      <form action="" className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2 p-4">
          {registerUserFields.map((field) => (
            <React.Fragment key={field.name}>
              <label className="font-semibold">{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                className="border p-2 rounded"
                placeholder={field.placeholder}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4">
          {registerPersonFields.map((field) => (
            <React.Fragment key={field.name}>
              <label className="font-semibold">{field.label}</label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                className="border p-2 rounded"
                placeholder={field.placeholder}
              />
            </React.Fragment>
          ))}
        </div>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </section>
  );
};
