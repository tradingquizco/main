import Header from "@/components/Header";
import Button from "@/components/Button";
import React from "react";

const Home = () => {
  return (
    <div className="h-dvh relative pt-3 ">
      <Header />
      <div className=" absolute top-[15%] flex items-center justify-around gap-10 w-full max-lg:flex-col">
        <div className="uppercase flex flex-col items-center gap-2">
          <h2 className="text-5xl font-extrabold max-lg:text-3xl">tradeing quiz </h2>
          <span className="font-light text-3xl text-slate-700">be a real hunter</span>
          <div className="bg-white shadow-md rounded-md p-2 flex gap-2">
            <input type="text" placeholder="Enter youre Email" className="bg-transparent outline-none"/>
            <Button>Sign Up</Button>
          </div>
        </div>
        <img src="./test.png" alt="" className="max-w-96 " />
        <button className="bg-orange-400 shadow-orange-400 p-2 shadow-md text-white rounded-md px-2 max-lg:hidden">Get Started</button>
      </div>
      <img src="./Frame.png" alt="" className="max-w-96" />

      <div className="flex justify-around max-xl:flex-col max-xl:items-center max-xl:gap-5">
        <div className="bg-gray-200 rounded-md p-5 flex flex-col gap-5 max-w-80 shadow-md shadow-gray-600">
          <h4 className="text-center uppercase font-semibold">follower <span>+5000</span></h4>
          <p className="text-slate-600 text-sm text-center font-medium">Join the big Trading Quiz family by following us</p>
          <Button>Joining US</Button>
        </div>

        <div className="bg-gray-200 rounded-md p-5 flex flex-col gap-5 max-w-80 shadow-md shadow-gray-600">
          <h4 className="text-center uppercase font-semibold">Quiz <span>+67000</span></h4>
          <p className="text-slate-600 text-sm text-center font-medium">Join the big Trading Quiz family by following us</p>
          <Button>Joining US</Button>
        </div>

        <div className="bg-gray-200 rounded-md p-5 flex flex-col gap-5 max-w-80 shadow-md shadow-gray-600">
          <h4 className="text-center uppercase font-semibold">online user <span>+4514</span></h4>
          <p className="text-slate-600 text-sm text-center font-medium">Join the big Trading Quiz family by following us</p>
          <Button>Joining US</Button>
        </div>

      </div>

      <div className="mb-14 mt-40 flex justify-around max-lg:flex-col max-lg:items-center max-lg:mt-20">
        <textarea placeholder="Example: woow!!" className="bg-gray-200 outline-none rounded-md resize-none p-2 w-64 h-32 shadow-gray-400 shadow-md"/>
        <h5 className="text-2xl font-bold text-center leading-10 max-lg:text-xl max-lg:my-5">Your criticism and suggestions will encourage and improve us.<br/> Thank you for your feedback<br/><Button>Submit</Button></h5>
      </div>
    </div>
  );
};
export default Home;
