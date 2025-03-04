import React from "react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette, Sparkles, Sun, Moon } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="min-h-screen container mx-auto px-4 py-24 max-w-5xl"> {/* Added py-24 for top and bottom spacing */}
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur opacity-30 animate-pulse rounded-full"></div>
            <div className="w-12 h-12 rounded-full bg-base-100 shadow-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-primary animate-spin-slow" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Appearance Settings
            </h1>
            <p className="text-base-content/70">Customize your chat experience</p>
          </div>
        </div>

        {/* Theme Selection Section */}
        <div className="bg-base-200 rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col gap-1 mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <h2 className="text-lg font-semibold">Theme Selection</h2>
            </div>
            <p className="text-sm text-base-content/70 ml-7">
              Choose a theme that matches your style
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  group relative overflow-hidden rounded-xl transition-all duration-300
                  ${theme === t ? 'ring-2 ring-primary ring-offset-2 ring-offset-base-100' : ''}
                `}
                onClick={() => setTheme(t)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:opacity-100 opacity-0 transition-opacity"></div>
                <div
                  className="p-4 relative z-10"
                  data-theme={t}
                >
                  <div className="h-10 w-full rounded-lg mb-2 grid grid-cols-2 gap-1 p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                  </div>
                  <span className="text-xs font-medium block text-center">
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-base-200 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Sun className="w-5 h-5 text-primary animate-spin-slow" />
            <h2 className="text-lg font-semibold">Live Preview</h2>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
              {/* Chat Header */}
              <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-medium">J</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">John Doe</h3>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                {PREVIEW_MESSAGES.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`
                        max-w-[80%] rounded-xl p-3 shadow-md transition-all hover:scale-[1.02]
                        ${message.isSent
                          ? "bg-primary text-primary-content"
                          : "bg-base-200"
                        }
                      `}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`
                          text-[10px] mt-1.5
                          ${message.isSent
                            ? "text-primary-content/70"
                            : "text-base-content/70"
                          }
                        `}
                      >
                        12:00 PM
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-base-300 bg-base-100">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered flex-1 text-sm h-10 focus:ring-2 ring-primary/20"
                    placeholder="Type a message..."
                    value="This is a preview"
                    readOnly
                  />
                  <button className="btn btn-primary h-10 min-h-0 px-4 hover:scale-105 transition-transform">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
