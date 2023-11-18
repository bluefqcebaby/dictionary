import { getAvailableLanguages } from "@/api/languages";
import { KEYS } from "@/constants/keys";
import { renderErrorToast } from "@/utils/toast/render-error-toast";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { toast } from "react-toastify";

export const NewDictionary = () => {
  const {
    data: languages,
    isError,
    isLoading,
    isFetched,
    error,
  } = useQuery({
    queryKey: [KEYS.LANGUAGE],
    queryFn: getAvailableLanguages,
  });

  const toastId = useRef<number | string>(0);

  if (isLoading) {
    toastId.current = toast.loading("Please wait...");
  }

  if (isFetched) {
    toast.dismiss();
  }

  if (isError) {
    renderErrorToast(toastId.current);
  }

  return (
    <>
      <h2 className="text-2xl mb-4">Select a new language</h2>
      <div className="grid grid-cols-4 gap-2">
        {languages?.map((elem) => (
          <div className="flex w-full border p-2 gap-2 items-center rounded-xl">
            <p className="text-3xl">{elem.emoji}</p>
            <p>{elem.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
