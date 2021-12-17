import Head from "next/head";
import Login from "../Components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>MetaMessenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to MetaMessenger</h1>
      <button
        onClick={logout}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-5 font-bold"
      >
        Logout
      </button>
    </div>
  );
}
