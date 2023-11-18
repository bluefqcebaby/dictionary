import { Header } from "./components/header";
import { Main } from "./components/main";
import { useAuth } from "@/hooks/useAuth";
import { Auth } from "@/pages/auth";

export const Home = () => {
  const { data, isError, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <span className="animate-ping rounded-full bg-slate-700 opacity-75 h-10 w-10" />
      </div>
    );
  }

  if (isError) {
    // TODO: make error screen
  }

  // if (!data) {
  //   return <Auth />;
  // }

  return (
    <>
      <Header />
      <Main />
    </>
  );
};
