import Header from "@/components/Header";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import React from "react";
import { geistMono, geistSans } from "./layout";

const Home = () => {
  return (
    <div className="h-dvh relative pt-3 ">
      <Header />
      <div className=" absolute top-[15%] flex items-center justify-around gap-10 w-full max-lg:flex-col max-lg:top-[20%] ">
        <div className="uppercase flex flex-col items-center gap-2">
          <h1 className={`!text-6xl text-center font-bold max-md:text-3xl ${geistMono.variable}`}>
            Improve Trading skills <br /> Through Quizzes
          </h1>
          <Title level={4} className="max-w-[500px]" type="secondary">
            TradingQuiz helps traders improve their skills through packs with
            various categories to cover different trading topics
          </Title>

          <button className="bg-orange-400 shadow-orange-400 p-2 shadow-md text-white rounded-md px-2  hover:shadow-lg hover:shadow-orange-400 transition-all">
            Get Started
          </button>
        </div>
        <img
          src="./test.png"
          alt=""
          className="max-w-2xl max-md:max-w-96 max-sm:max-w-80"
        />
      </div>
      <img src="./Frame.png" alt="" className="max-w-xl max-md:max-w-72" />

      <div className="flex justify-around max-xl:flex-col max-xl:mt-14 max-xl:items-center max-xl:gap-5 ">
        <div className="p-5 flex flex-col gap-5 items-center max-w-80 cursor-pointer transition ease-linear delay-75 hover:-translate-y-4">
          <h4 className="uppercase text-3xl font-semibold">follower</h4>
          <span className="font-medium text-2xl text-orange-400">+5000</span>
        </div>

        <div className="p-5 flex flex-col gap-5 items-center max-w-80 cursor-pointer transition ease-linear delay-75 hover:-translate-y-4">
          <h4 className="uppercase text-3xl font-semibold">online user</h4>
          <span className="font-medium text-2xl text-orange-400">+2219</span>
        </div>

        <div className="p-5 flex flex-col gap-5 items-center max-w-80 cursor-pointer transition ease-linear delay-75 hover:-translate-y-4">
          <h4 className="uppercase text-3xl font-semibold">Quiz</h4>
          <span className="font-medium text-2xl text-orange-400">+7300</span>
        </div>
      </div>

      {/* <div className="mb-14 mt-40 flex justify-around max-lg:flex-col max-lg:items-center max-lg:mt-20">
        <textarea
          placeholder="Example: woow!!"
          className="bg-gray-200 outline-none rounded-md resize-none p-2 w-64 h-32 shadow-gray-400 shadow-md"
        />
        <h5 className="text-2xl font-bold text-center leading-10 max-lg:text-xl max-lg:my-5">
          Your criticism and suggestions will encourage and improve us.
          <br /> Thank you for your feedback
          <br />
          <Button>Submit</Button>
        </h5>
      </div> */}
    </div>
  );
};
export default Home;
