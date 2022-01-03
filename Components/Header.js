import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="text-white sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            className="rounded-full object-cover"
            src="https://links.papareact.com/3pi"
          />
        </div>

        <div className="text-left lg:text-center col-span-4">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Message */}
          <h1 className="text-3xl">Welcome To MetaMessenger</h1>

          {/* username */}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          {/* change username component */}
          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
