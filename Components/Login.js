import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import avatar from "../public/images/metamessenger-logo.jpeg";
import background from "../public/images/metaverse-background.jpeg";

function Login() {
  const { authenticate } = useMoralis();

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Meta Messenger", "Web 3.0 Messaging"],
    });
  }, []);

  return (
    <div className="">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4"></div>
      <div className="flex flex-col absolute z-50 h-1/6 w-full items-center justify-center">
        <h1 className="font-mono text-4xl text-white">
          <span ref={textRef}></span>
        </h1>
      </div>
      {/* logo */}
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src={avatar}
          height={200}
          width={200}
        />

        {/* login button */}
        <button
          onClick={authenticate}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Enter The METAVERSE
        </button>
      </div>

      <div className="w-full h-screen z-10">
        <Image src={background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
