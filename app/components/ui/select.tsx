import { SelectHTMLAttributes } from "react";

const Select = ({
  children,
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) => {
  const customClasses = `text-primary cursor-pointer hover:bg-background-primary bg-background-secondary px-2 ring-0 ring-primary focus:ring-primary focus:border-primary ring-offset-0 focus:outline-none focus:ring-2 rounded-full ${className}`;
  return (
    <select className={customClasses} {...props}>
      {children}
    </select>
  );
};

export default Select;
