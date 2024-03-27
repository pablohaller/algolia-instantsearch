import { ButtonHTMLAttributes } from "react";

interface Props {}
const Button = ({
  type,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Props) => (
  <button
    className="bg-primary text-background-primary hover:bg-primary-light active:bg-primary-dark px-4 py-2 rounded-full disabled:opacity-50 disabled:pointer-events-none"
    type={type}
    {...props}>
    {children}
  </button>
);

export default Button;
