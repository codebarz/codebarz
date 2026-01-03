import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 100, height: 24 },
  md: { width: 130, height: 32 },
  lg: { width: 160, height: 40 },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/codebarz-white-logo.svg"
        alt="Codebarz - Back to homepage"
        width={width}
        height={height}
        priority
        className="h-auto"
      />
    </Link>
  );
}
