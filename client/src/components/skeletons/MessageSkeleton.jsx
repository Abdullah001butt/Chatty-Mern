const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"} animate-pulse`}
        >
          <div className="chat-image avatar">
            <div className="size-10 rounded-full bg-gradient-to-br from-base-300 to-base-200">
              <div className="skeleton w-full h-full rounded-full animate-shimmer" />
            </div>
          </div>

          <div className="chat-header mb-1 flex items-center gap-2">
            <div className="skeleton h-4 w-24 bg-base-300" />
            <div className="skeleton h-3 w-12 bg-base-200" />
          </div>

          <div className={`chat-bubble bg-base-300/50 backdrop-blur-sm ${
            idx % 2 === 0 ? "chat-bubble-primary" : "chat-bubble-secondary"
          }`}>
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-[180px]" />
              <div className="skeleton h-4 w-[220px]" />
              <div className="skeleton h-4 w-[160px]" />
            </div>
          </div>

          <div className="chat-footer opacity-50 mt-1">
            <div className="skeleton h-3 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
