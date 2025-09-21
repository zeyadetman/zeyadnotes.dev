"use client";

import { useState, useEffect } from "react";
import { Mountains, Eye, EyeSlash, X } from "@phosphor-icons/react";

export const BackgroundToggle = () => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Show button after a short delay for smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleBackground = () => {
    setIsBackgroundVisible(!isBackgroundVisible);

    // Toggle the background-mountains class on the body
    if (isBackgroundVisible) {
      document.body.classList.remove("background-mountains");
    } else {
      document.body.classList.add("background-mountains");
    }
  };

  const hideButton = () => {
    setIsHidden(true);
  };

  // Don't render if hidden
  if (isHidden) return null;

  return (
    <div
      className={`fixed right-4 bottom-10 z-50 transition-all duration-500 ease-in-out md:right-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <div className="relative group">
        <button
          onClick={toggleBackground}
          className="flex items-center justify-center bg-primary-content/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 w-12 h-12 shrink-0 p-0 sm:w-10 sm:h-10 rounded-full"
          aria-label={
            isBackgroundVisible ? "Hide background" : "Show background"
          }
        >
          {isBackgroundVisible ? (
            <EyeSlash size={18} weight="fill" className="sm:w-4 sm:h-4" />
          ) : (
            <Mountains size={18} weight="fill" className="sm:w-4 sm:h-4" />
          )}
        </button>

        {/* Close button that appears on hover */}
        <button
          onClick={hideButton}
          className="absolute -top-1 -left-1 w-4 h-4 bg-error text-error-content rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg"
          aria-label="Hide toggle button"
        >
          <X size={6} weight="bold" />
        </button>

        {/* Tooltip */}
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          <div className="bg-base-content text-base-100 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            {isBackgroundVisible ? "Hide background" : "Show background"}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-base-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
