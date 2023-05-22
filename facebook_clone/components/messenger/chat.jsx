import React, { useState } from "react";
import "../../app/globals.css";
const ChatBox = ({ messages, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center  flex-col w-full  messagesListHeight">
      <div className="flex-1 items-center flex justify-center w-full overflow-y-auto">
        <ul className="space-y-2 mt-8">
          {message?.length > 0 ? (
            messages?.map((message, index) => (
              <li key={index} className="flex items-start">
                <span className="font-bold mr-2">{message?.username}: </span>
                <span>{message?.text}</span>
              </li>
            ))
          ) : (
            <div>
              <span className="text-2xl">
                No message to show.start converstation
              </span>
            </div>
          )}
        </ul>
      </div>
      <div className=" rounded-lg flex  items-center justify-center w-full  p-4">
        <form className="flex flex-col w-96 gap-2" onSubmit={handleSubmit}>
          <textarea
            type="text"
            className="flex-grow  h-24 p-2 px-2  py-1 mr-2 border border-gray-300 rounded"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
