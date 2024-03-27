import { InputHTMLAttributes, Ref } from "react";

interface Props {
  ref?: Ref<HTMLInputElement>;
}

const Input = ({
  ref,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Props) => {
  const customClasses = `border border-primary w-full p-2 bg-transparent rounded-md ring-0 ring-primary focus:ring-primary focus:border-primary ring-offset-0 focus:outline-none focus:ring-2 ${className}`;
  return <input className={customClasses} ref={ref} {...props} />;
};

export default Input;
