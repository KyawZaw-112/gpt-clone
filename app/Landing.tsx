"use client";
import GptBlack from "@/public/GptBlack";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import {signIn} from "next-auth/react"


const Landing = () => {
  return (
    <div className="md:flex h-screen">
      <div className="hidden md:flex flex-col gap-20 justify-around bg-[#FFFFDB] lg:w-2/3 w-1/2 h-screen text-[#FE7600] ">
        <h1 className="text-2xl px-7 py-7 font-bold tracking-tighter hidden md:block cursor-default">
          ChatGPT
          <span className="text-4xl text-center">●</span>
        </h1>
        <div className="flex-1 px-7  flex flex-col gap-6">
          <h2 className="text-4xl font-bold">Popular prompts in 2024</h2>
          <div className="text-5xl font-light">
            <Typewriter
              words={[
                `Summarize and seed information about competitors’ products`,
                `Create HTML Pros/Cons chart`,
                `give me js code for clock  :3`,
                `What is the meaning of life?`,
                `Tell me a joke.`,
              ]}
              loop={false}
              cursor
              cursorStyle="●"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              cursorBlinking={true}
            />
          </div>
        </div>
      </div>
      <div className="flex  flex-col h-screen md:w-1/2 lg:1/3 justify-between md:justify-around  px-5 ">
        <h1 className="text-2xl px-7 py-7 font-bold tracking-tighter md:hidden cursor-default">
          ChatGPT
          <span className="text-4xl text-center">●</span>
        </h1>
        <div className="flex flex-col items-center gap-3 justify-center grow">
          <h2 className="text-2xl font-bold lg:text-4xl">Get started</h2>
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <Link href={'/login'}>
              <button className="bg-[#3C46FF] text-center md:flex-1 hover:bg-[#0000FF] text-lg font-bold text-white rounded-lg py-3">
                Login
              </button>
            </Link>
            <button onClick={()=>signIn('google')} className="bg-[#3C46FF] text-center md:flex-1 hover:bg-[#0000FF] text-lg font-bold text-white rounded-lg py-3 ">
              Sign up
            </button>
          </div>
        </div>
        <div className="pb-10 flex item-center flex-col items-center gap-2">
          <div className="text-gray-300 mx-auto">
            <GptBlack />
          </div>
          <div className="text-gray-400 underline text-xs tracking-wider flex flex-row gap-4 justify-center font-medium">
            <Link href={"https://openai.com/policies/terms-of-use"}>
              Terms of use
            </Link>
            <div>|</div>
            <Link href={"https://openai.com/policies/privacy-policy"}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
