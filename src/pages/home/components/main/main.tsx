import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="container mt-10">
      <Outlet />
    </div>
  );
};
