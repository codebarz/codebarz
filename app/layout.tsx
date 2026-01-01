import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "codebarz - Expert Software Engineering Services",
  description:
    "Codebarz is a premium software engineering firm. We design, build, and scale custom applications to solve your most complex business challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} bg-background-dark font-display text-white antialiased`}
      >
        <CustomCursor />
        <div className="relative flex min-h-screen w-full flex-col">
          <div className="flex h-full grow flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
