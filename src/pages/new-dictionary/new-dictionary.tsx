import { supabase } from "@/db";
import { Database } from "@/types/db";
import { Text } from "@geist-ui/core";
import { useEffect, useState } from "react";

export const NewDictionary = () => {
  const [dictionaries, setDictionaries] = useState<
    Database["public"]["Tables"]["dictionaries"]["Row"][]
  >([]);

  const init = async () => {
    const result = await supabase.from("dictionaries").select();
  };

  useEffect(() => {
    init();
  }, []);

  return <Text h2>New dictionary</Text>;
};
