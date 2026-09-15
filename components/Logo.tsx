import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 120, height: 21 },
  md: { width: 144, height: 25 },
  lg: { width: 180, height: 31 },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <Link href="/" className={`flex shrink-0 items-center ${className}`}>
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
