import { forwardRef, InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return <input ref={ref} className="py-2 px-4 border rounded-xl" {...props} />;
});
