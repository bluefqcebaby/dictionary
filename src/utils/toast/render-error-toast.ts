import { toast } from "react-toastify";

export const renderErrorToast = (id: number | string) => {
  toast.update(id, {
    render: "Oops! Unexpected error 🥲",
    type: "error",
    isLoading: false,
    autoClose: 3000,
  });
};
