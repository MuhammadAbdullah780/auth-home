import React, { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
};

const Input: React.FC<Props> = ({ id, type, label }) => {
  const { register } = useFormContext();

  return (
    <div className="mt-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...register(id)}
        type={type}
        id={id}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
