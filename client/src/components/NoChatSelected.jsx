import { MessageSquare, Users, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-4 sm:p-8 md:p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6 sm:space-y-8">
        {/* Animated Icons Display */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-4 sm:mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur opacity-30 animate-pulse rounded-xl"></div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-base-100 shadow-xl flex items-center justify-center animate-bounce">
              <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent blur opacity-30 animate-pulse rounded-xl"></div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-base-100 shadow-xl flex items-center justify-center animate-bounce delay-100">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary blur opacity-30 animate-pulse rounded-xl"></div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-base-100 shadow-xl flex items-center justify-center animate-bounce delay-200">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
          </div>
        </div>

        {/* Welcome Text with Animation */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
            Welcome to Chatty!
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 leading-relaxed px-4 sm:px-0">
            Start a conversation by selecting a chat from the sidebar. 
            Connect, share, and collaborate with others in real-time!
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-6">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-ping"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-ping delay-100"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-ping delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
