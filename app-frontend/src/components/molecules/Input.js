import { append } from "../../utils/classname";
import { InputLabel } from "../atoms";

export const Input = ({
  label = "",
  labelClassName,
  inputClassName,
  isError = false,
  error,
  ...props
}) => {
  const defaultLabelClassName = `flex flex-col justify-center items-start w-full ${
    !!isError ? "text-red-500" : "text-gray-700"
  }`;
  const defaultInputClassName = `appearance-none border rounded w-full py-2 px-3 leading-tight ${
    !!isError
      ? "text-red-700 border-red-500 focus:outline-red-500"
      : "text-gray-700"
  }`;

  return (
    <InputLabel className={append(defaultLabelClassName, labelClassName)}>
      {label}
      <input
        {...props}
        className={append(defaultInputClassName, inputClassName)}
      />
      {!!isError && (
        <span className="relative font-light right-0 top-0 ml-2 text-red-500 text-sm">
          {error}
        </span>
      )}
    </InputLabel>
  );
};
