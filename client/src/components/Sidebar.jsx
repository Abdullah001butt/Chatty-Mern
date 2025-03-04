import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "../components/skeletons/SidebarSkeleton";
import useAuthStore from "../store/useAuthStore";
import { Users, Search, Settings, Filter } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const onlineUsers = useAuthStore((state) => state.onlineUsers) || [];
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users
    .filter(user => 
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!showOnlineOnly || onlineUsers.includes(user._id))
    );

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-base-300 flex flex-col transition-all duration-200 bg-base-200/50 backdrop-blur-sm">
      {/* Header Section */}
      <div className="border-b border-base-300 w-full p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur opacity-30 animate-pulse rounded-full"></div>
            <div className="w-10 h-10 rounded-full bg-base-100 shadow-lg flex items-center justify-center relative">
              <Users className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="hidden lg:block">
            <h2 className="font-semibold text-base-content">Contacts</h2>
            <p className="text-xs text-base-content/70">
              {onlineUsers.length - 1} online
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block relative">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-sm input-bordered w-full pl-9 bg-base-100/50"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
        </div>

        {/* Filter Toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2 hover:bg-base-300 p-2 rounded-lg transition-colors">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary"
            />
            <Filter className="w-4 h-4 text-base-content/70" />
            <span className="text-sm">Show online only</span>
          </label>
        </div>
      </div>

      {/* Users List */}
      <div className="overflow-y-auto flex-1 py-2">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => {
              setSelectedUser(user)
              console.log("Selected user:", user); // Add this line
            }}
            className={`
              w-full p-3 flex items-center gap-3 transition-all duration-200
              hover:bg-base-300/50 active:scale-98
              ${selectedUser?._id === user._id ? "bg-base-300 shadow-inner" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0 group">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-base-300 transition-transform group-hover:scale-105">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full ring-2 ring-base-100" />
              )}
            </div>

            {/* User Info - Desktop Only */}
            <div className="hidden lg:block text-left min-w-0 group-hover:translate-x-1 transition-transform">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-base-content/70 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${onlineUsers.includes(user._id) ? "bg-success" : "bg-base-content/30"}`} />
                {onlineUsers.includes(user._id) ? "Active now" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-base-content/50 py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-base-300/50 flex items-center justify-center">
              <Users className="w-8 h-8 text-base-content/30" />
            </div>
            <p>No contacts found</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
