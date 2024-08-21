import { Metadata } from "next";
import Footer from "./components/Fotter";
import InputForm from "./components/InputForm";

export const metadata: Metadata = {
  title: "Home | Todo App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-300 to-slate-300 flex flex-col items-center px-2">
      <div className="w-full max-w-screen-md bg-bodyColor p-40 md:p-20 lg:p-10 flex flex-col gap-5">
        <InputForm />
        <Footer />
      </div>
    </div>
  );
}
