interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "7xl";
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "!text-sm",
  md: "!text-base",
  lg: "!text-lg",
  xl: "!text-xl",
  "2xl": "!text-2xl",
  "4xl": "!text-4xl",
  "7xl": "!text-7xl",
};

export default function Icon({ name, size = "md", className = "" }: IconProps) {
  return (
    <span className={`material-symbols-outlined ${sizeClasses[size]} ${className}`}>
      {name}
    </span>
  );
}

