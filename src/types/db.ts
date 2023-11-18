import { Database } from "./auto-db";

type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type TLanguage = Tables<"languages">;
