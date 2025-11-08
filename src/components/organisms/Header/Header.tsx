import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Menu, Search, Plus } from "lucide-react";
import { SearchDropdown } from "@/components/dashboard/SearchDropdown";
import { ProfileDropdown } from "@/components/dashboard/ProfileDropdown";
import { useAppStore } from "@/store";

export interface HeaderProps {
  className?: string;
}

/**
 * Header component
 */
export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("Bradley Wilkins");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { toggleSidebar, sidebarOpen } = useAppStore();

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-20 right-0 h-16 bg-header-bg flex items-center justify-between px-6 z-[9999]",
        sidebarOpen && "left-64",
        "transition-all duration-300",
        className
      )}
      style={{
        backgroundColor: "#f9fafb",
        // backdropFilter: 'none',
        WebkitBackdropFilter: "none",
      }}
    >
      {/* Left side - Hamburger and Dashboard text */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="rounded-md p-2 hover:bg-gray-200 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Right side - Search and Plus */}
      <div className="flex items-center gap-4 relative">
        <div className="relative" data-search-container>
          <div
            className={cn(
              "flex items-center gap-2 rounded-lg transition-all duration-300",
              searchOpen
                ? "w-full px-3 py-2 shadow-md bg-white"
                : "w-10 h-10 justify-center cursor-pointer bg-gray-100 hover:bg-gray-300"
            )}
            onClick={() => {
              if (!searchOpen) {
                setSearchOpen(true);
                setProfileOpen(false);
              }
            }}
          >
            {searchOpen ? (
              <>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 outline-none text-sm text-gray-900 bg-transparent"
                  placeholder="Search..."
                />
                <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
              </>
            ) : (
              <Search className="h-5 w-5 text-gray-700" />
            )}
          </div>
          <SearchDropdown
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
            searchValue={searchValue}
          />
        </div>
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setSearchOpen(false);
            }}
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors",
              profileOpen ? "bg-blue-500" : "bg-gray-100 hover:bg-gray-300"
            )}
            aria-label="New"
          >
            <Plus
              className={cn(
                "h-5 w-5",
                profileOpen ? "text-white" : "text-gray-700"
              )}
            />
          </button>
          <ProfileDropdown
            isOpen={profileOpen}
            onClose={() => setProfileOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};
