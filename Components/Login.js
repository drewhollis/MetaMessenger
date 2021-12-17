import Image from "next/image";
import { useMoralis } from "react-moralis";
import avatar from "../public/images/meta-dog-nft.png";
import background from "../public/images/metaverse-background.jpeg";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* logo */}
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
