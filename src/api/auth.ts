import { Session } from "@supabase/supabase-js";
import { supabase } from ".";

export const getSession = async (): Promise<Session | null> => {
  await new Promise((res) => setTimeout(res, 2000));

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw new Error(error.message);
  }

  return data.session;
};
