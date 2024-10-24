"use client"

import React from "react";
import { BackgroundLines } from "./background-lines";
import { Button } from "antd";
import { redirect, useRouter } from "next/navigation";

const HomePage = () => {
  const {push} = useRouter();
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2
          className={`bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-400 to-primary text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight`}
        >
          Improve Your Trading Skills
          <br /> Through Quizzes
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          TradingQuiz Helps traders to improve their trading skills, through
          packs various catergory for covering different trading topics
        </p>
        <Button className="mt-4" onClick={() => push("/login")}>Let's Go</Button>
      </BackgroundLines>
    </>
  );
};

export default HomePage;
