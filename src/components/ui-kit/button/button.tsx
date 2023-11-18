import { FC, ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconRight: JSX.Element;
}

export const Button: FC<IProps> = ({ iconRight, children, ...props }) => {
  return (
    <button
      className="border p-2 rounded-lg flex items-center gap-2"
      {...props}
    >
      {children}
      {iconRight}
    </button>
  );
};
