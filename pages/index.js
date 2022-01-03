import Head from "next/head";
import Login from "../Components/Login";
import { useMoralis } from "react-moralis";
import Header from "../Components/Header";
import Messages from "../Components/Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <button
        onClick={logout}
        className="h-8 px-4 m-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg font-bold"
      >
        Logout
      </button>

      <Head>
        <title>MetaMessenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <Header />

        {/* Messages */}
        <Messages />
        {/* Footer */}
      </div>
    </div>
  );
}
