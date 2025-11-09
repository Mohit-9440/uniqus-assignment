import React, { useRef, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Code2, Palette } from "lucide-react";

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  date: string;
}

export interface SearchDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  searchValue: string;
  className?: string;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  isOpen,
  onClose,
  searchValue,
  className,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activities: ActivityItem[] = [
    {
      id: "1",
      title: "Dribble Redesign",
      subtitle: "Webdesign",
      icon: <Palette className="w-3 h-3 text-white" />,
      iconBg: "bg-orange-500",
      date: "24 Feb 2019",
    },
    {
      id: "2",
      title: "New HTML Theme",
      subtitle: "Theme",
      icon: <Code2 className="w-3 h-3 text-white" />,
      iconBg: "bg-green-500",
      date: "20 May 2019",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !target.closest("[data-search-container]")
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={cn(
        "absolute top-full mt-1 bg-white rounded-lg shadow-lg z-50",
        "left-0 min-[480px]:left-auto min-[480px]:right-0 min-[480px]:w-80",
        "w-72 max-w-[calc(100vw-4rem)] min-[480px]:max-w-none",
        className
      )}
    >
      <div className="max-h-96 overflow-y-auto">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={cn(
              "px-3 min-[480px]:px-4 py-2 min-[480px]:py-3 border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer",
              index === activities.length - 1 && "border-b-0"
            )}
          >
            <div className="flex items-start gap-2 min-[480px]:gap-3">
              <div
                className={cn(
                  "w-7 h-7 min-[480px]:w-8 min-[480px]:h-8 rounded-md flex items-center justify-center flex-shrink-0",
                  activity.iconBg
                )}
              >
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 min-[480px]:gap-3">
                  <div>
                    <p className="font-semibold text-gray-900 text-xs">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {activity.subtitle}
                    </p>
                  </div>
                  <span className="px-2 min-[480px]:px-3 py-0.5 min-[480px]:py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md whitespace-nowrap">
                    {activity.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-3 min-[480px]:px-4 py-2 min-[480px]:py-3 border-gray-200">
        <div className="flex items-center gap-2 min-[480px]:gap-3">
          <div className="w-7 h-7 min-[480px]:w-8 min-[480px]:h-8 rounded-md bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-semibold text-gray-700">BW</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 min-[480px]:gap-3">
              <div>
                <p className="font-semibold text-gray-900 text-xs">
                  Bradley Wilkins
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  b.wilkins@gmail.com
                </p>
              </div>
              <span className="px-2 min-[480px]:px-3 py-0.5 min-[480px]:py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-md whitespace-nowrap">
                Designer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
