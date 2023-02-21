import { append } from "../../utils/classname";

export const SectionHeader = ({ children, className, ...props }) => {
  const defaultClassName = "text-3xl font-bold leading-tight";
  return (
    <h1 {...props} className={append(defaultClassName, className)}>
      {children}
    </h1>
  );
};

export const CardText = ({ children, className, ...props }) => {
  const defaultClassName = "text-gray-700 text-base";
  return (
    <p {...props} className={append(defaultClassName, className)}>
      {children}
    </p>
  );
};

export const InputLabel = ({ children, className, ...props }) => {
  const defaultClassName = "text-gray-700 font-bold";
  return (
    <label {...props} className={append(defaultClassName, className)}>
      {children}
    </label>
  );
};
