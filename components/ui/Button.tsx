import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "youtube";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: string;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary/90 text-black font-bold",
  secondary:
    "bg-white/10 text-white hover:bg-white/20 font-semibold",
  ghost:
    "text-white hover:bg-white/10 font-semibold",
  youtube:
    "bg-red-600 hover:bg-red-700 text-white font-semibold",
};

export default function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex min-w-[84px] cursor-pointer items-center justify-center 
        overflow-hidden rounded-lg h-12 px-6 text-base transition-colors gap-2
        ${variantStyles[variant]}
        ${fullWidth ? "w-full sm:w-auto" : ""}
        ${className}
      `}
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      <span className="truncate">{children}</span>
    </button>
  );
}

