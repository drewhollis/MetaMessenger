import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        user: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        () => {
          // object saved successfully
        },
        (error) => {
          //   the save failed
          // error is Moralis.error with error code and message
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="shadow-xl rounded-full border-4 border-pink-500 max-w-2xl fixed bottom-10 bg-black opacity-80 px-6 py-4 flex w-11/12">
      <input
        className="pr-5 flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        placeholder={`Enter a message ${user.getUsername()}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-white"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
