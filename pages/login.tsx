import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import githubLogo from "@/public/images/github.png";
import { useRouter } from "next/router";

const GithubSignInButton = () => {
  const handleClick = () => {
    signIn("github");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
    >
      <Image src={githubLogo} alt="Github Logo" width={20} height={20} />
      <span className="ml-4">Continue with Github</span>
    </button>
  );
};

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <section className="login-container">
      <div className="md:w-1/3 max-w-sm">
        <Image
          src="/images/login-white.png"
          alt="Sample image"
          height={500}
          width={800}
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <GithubSignInButton />
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          disabled
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          disabled
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            disabled
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
