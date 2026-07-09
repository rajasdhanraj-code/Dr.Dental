import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size }: LucideIconProps) {
  // Safe lookup for Lucide icons
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a default fallback icon in case name is not found
    return <Icons.HelpCircle className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
