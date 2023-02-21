import { append } from "../../utils/classname";

export const Button = ({ children, className, ...props }) => {
  const defaultClassName =
    "bg-blue-500 hover:bg-blue-700 shadow-md text-white font-bold py-2 px-4 rounded";
  return (
    <button {...props} className={append(defaultClassName, className)}>
      {children}
    </button>
  );
};
