// components/ui/Badge.jsx
import React from "react";

// Simple utility for merging classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" && "bg-blue-600 text-white",
        variant === "secondary" && "bg-gray-200 text-gray-800",
        variant === "destructive" && "bg-red-600 text-white",
        variant === "outline" && "border border-gray-300 text-gray-900",
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge };
