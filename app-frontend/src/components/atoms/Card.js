import { append } from "../../utils/classname";

export const Card = ({ children, className, ...props }) => {
  const defaultClassName =
    "w-full rounded overflow-hidden border border-gray-300 shadow-xl px-4 py-2 cursor-default";
  return (
    <div {...props} className={append(defaultClassName, className)}>
      {children}
    </div>
  );
};
