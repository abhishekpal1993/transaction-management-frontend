import { append } from "../../utils/classname";
import { InputLabel } from "../atoms";

export const Input = ({ label, labelClassName, inputClassName, ...props }) => {
  const defaultLabelClassName =
    "flex flex-col justify-center items-start w-full";
  const defaultInputClassName =
    "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  return !!label ? (
    <InputLabel className={append(defaultLabelClassName, labelClassName)}>
      {label}
      <input
        {...props}
        className={append(defaultInputClassName, inputClassName)}
      />
    </InputLabel>
  ) : (
    <input
      {...props}
      className={append(defaultInputClassName, inputClassName)}
    />
  );
};
