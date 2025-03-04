import { X, Phone, Video, MoreVertical } from "lucide-react";
import useAuthStore from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-4 border-b border-base-300 bg-base-200/50 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar with online indicator */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-base-300">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            {isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full ring-2 ring-base-100" />
            )}
          </div>

          {/* User info */}
          <div>
            <h3 className="font-semibold text-lg">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70 flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-success" : "bg-base-content/30"}`} />
              {isOnline ? "Active now" : "Offline"}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <Phone className="w-5 h-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <Video className="w-5 h-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <MoreVertical className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setSelectedUser(null)}
            className="btn btn-ghost btn-circle hover:bg-error/20 hover:text-error"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
