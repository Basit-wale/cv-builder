import ChatCanvas from "./chat-canvas";
import Contacts from "./contact-field";

const Chats = () => {
  return (
    <div className="flex h-[100vh] gap-1">
      <div className="w-[5em] h-full"></div>
      <div className="flex w-full">
        <Contacts />

        <ChatCanvas />
      </div>
    </div>
  );
};

export default Chats;
