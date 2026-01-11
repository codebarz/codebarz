import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codebarz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "codebarz - Expert Software Engineering Services",
    template: "%s | codebarz",
  },
  description:
    "We architect high-performance digital infrastructure for the world's most ambitious companies. Custom software development, system design, and engineering consulting. Precision engineered. Scalable by design.",
  keywords: [
    "software engineering",
    "custom software development",
    "system architecture",
    "full-stack development",
    "API development",
    "cloud infrastructure",
    "DevOps",
    "engineering consulting",
    "React",
    "Node.js",
    "TypeScript",
    "scalable systems",
    "enterprise software",
    "startup development",
    "technical consulting",
  ],
  authors: [{ name: "codebarz", url: siteUrl }],
  creator: "codebarz",
  publisher: "codebarz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "codebarz",
    title: "codebarz - Expert Software Engineering Services",
    description:
      "We architect high-performance digital infrastructure for the world's most ambitious companies. Custom software development, system design, and engineering consulting.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "codebarz - Engineering the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "codebarz - Expert Software Engineering Services",
    description:
      "We architect high-performance digital infrastructure for the world's most ambitious companies. Precision engineered. Scalable by design.",
    images: ["/og-image.png"],
    creator: "@codebarz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
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
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "codebarz",
              url: siteUrl,
              logo: `${siteUrl}/codebarz-white-logo.svg`,
              description:
                "We architect high-performance digital infrastructure for the world's most ambitious companies. Custom software development, system design, and engineering consulting.",
              sameAs: [
                "https://twitter.com/codebarz",
                "https://github.com/codebarz",
                "https://linkedin.com/company/codebarz",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hello@codebarz.com",
              },
              foundingDate: "2020",
              slogan: "Engineering the Future",
              knowsAbout: [
                "Software Engineering",
                "System Architecture",
                "Cloud Infrastructure",
                "Full-Stack Development",
                "DevOps",
                "API Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background-dark font-display text-white antialiased`}
      >
        <CustomCursor />
        <div className="relative flex min-h-screen w-full flex-col">
          <div className="flex h-full grow flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
