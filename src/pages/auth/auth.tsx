import { useForm } from "react-hook-form";
import { z } from "zod";
import { authSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import * as UI from "@/components/ui-kit";

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: z.infer<typeof authSchema>) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <UI.Input type="text" placeholder="E-mail" {...register("email")} />
        <UI.Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </form>
    </div>
  );
};
