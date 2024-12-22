import React from "react";
import AuthTabs from "./Authentication";

export default function AuthForm() {
  return (
    <section className="bg-[#FAFAFA] h-screen w-screen md:w-[50vw] flex flex-col items-center justify-center">
      <div className="bg-white border border-[#E9EAEB] w-[90%] box-shadow rounded-xl mb-6">
        <div className="p-5 flex flex-col items-center justify-center">
          <span className="mb-4 flex items-center gap-3">
            <img src="/codeantLogo.svg" />
            <h2 className="company-name text-xl md:text-2xl">CodeAnt AI</h2>
          </span>
          <h1 className="text-xl md:text-2xl font-semibold tracking-wider">
            Welcome to CodeAnt AI
          </h1>
        </div>
        <AuthTabs />
      </div>
      <p>By signing up you agree to the <a className="font-bold" href="">Privacy Policy.</a></p>
    </section>
  );
}
