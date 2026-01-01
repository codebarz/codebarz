import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
  fullWidth = false,
}: SectionWrapperProps) {
  if (fullWidth) {
    return <section className={className}>{children}</section>;
  }

  return (
    <section className={className}>
      <div
        className={`w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

