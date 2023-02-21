import { append } from "../../utils/classname";

export const Button = ({
  children,
  className,
  disabled = false,
  type,
  isLoading = false,
  ...props
}) => {
  const defaultClassName = "shadow-md text-white font-bold py-2 px-4 rounded";
  const isDisabledClassName = !!disabled
    ? "bg-gray-400 hover:bg-gray-700 cursor-not-allowed"
    : "bg-blue-500 hover:bg-blue-700 cursor-pointer";
  return (
    <input
      {...props}
      className={append(isDisabledClassName, defaultClassName, className)}
      type={type || "submit"}
      value={isLoading ? "..." : children}
      readOnly={true}
    />
  );
};
