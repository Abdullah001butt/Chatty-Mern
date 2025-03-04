import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <header className="bg-gradient-to-r from-base-100/95 to-base-100/90 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 h-18">
        <div className="flex items-center justify-between h-full py-3">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group"
            >
              <div className="size-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <MessageSquare className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
                Chatty
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={"/settings"}
              className="btn btn-sm btn-ghost hover:bg-base-200 gap-2 transition-all duration-300 rounded-lg"
            >
              <Settings className="w-4 h-4 text-base-content/80" />
              <span className="hidden sm:inline font-medium">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className="btn btn-sm btn-ghost hover:bg-base-200 gap-2 transition-all duration-300 rounded-lg"
                >
                  <User className="size-4 text-base-content/80" />
                  <span className="hidden sm:inline font-medium">Profile</span>
                </Link>

                <button
                  className="btn btn-sm btn-error btn-outline gap-2 transition-all duration-300 rounded-lg hover:scale-105"
                  onClick={logout}
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
