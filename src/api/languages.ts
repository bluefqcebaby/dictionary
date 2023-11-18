import { TLanguage } from "@/types/db";
import { supabase } from ".";
import { toast } from "react-toastify";

export const getAvailableLanguages = async (): Promise<TLanguage[]> => {
  const { data, error } = await supabase.from("languages").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
