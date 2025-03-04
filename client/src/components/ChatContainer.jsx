import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import useAuthStore from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-zinc-50 dark:bg-zinc-900">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-4 sm:space-y-6">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`flex ${
              message.senderId === authUser._id
                ? "justify-end"
                : "justify-start"
            }`}
            ref={messageEndRef}
          >
            <div className="flex items-start gap-2 sm:gap-3 max-w-[85%] sm:max-w-[70%] group">
              {message.senderId !== authUser._id && (
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white dark:border-zinc-800 shadow-sm"
                    src={selectedUser.profilePic || "/avatar.png"}
                    alt="profile pic"
                  />
                </div>
              )}
              <div
                className={`flex flex-col space-y-1 ${
                  message.senderId === authUser._id
                    ? "items-end"
                    : "items-start"
                }`}
              >
                <div
                  className={`p-2 sm:p-3 rounded-2xl shadow-sm ${
                    message.senderId === authUser._id
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white dark:bg-zinc-800 rounded-bl-none"
                  }`}
                >
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="max-w-[150px] sm:max-w-[200px] rounded-md mb-2"
                    />
                  )}
                  {message.text && (
                    <p className="text-[14px] sm:text-[15px]">{message.text}</p>
                  )}
                </div>
                <span className="text-[10px] sm:text-xs text-zinc-500 px-2">
                  {formatMessageTime(message.createdAt)}
                </span>
              </div>
              {message.senderId === authUser._id && (
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white dark:border-zinc-800 shadow-sm"
                    src={authUser.profilePic || "/avatar.png"}
                    alt="profile pic"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
