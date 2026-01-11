import {
  V2Header,
  V2Hero,
  V2Clients,
  V2TrustedBy,
  V2Projects,
  V2Academy,
  V2OpenSource,
  V2Contact,
  V2Footer,
  ScrollLogo,
} from "@/components/v2";

export const metadata = {
  title: "codebarz - Engineering the Future",
  description:
    "We architect high-performance digital infrastructure for the world's most ambitious companies. Precision engineered. Scalable by design.",
};

export default function Home() {
  return (
    <div className="bg-black text-slate-300 font-sans antialiased selection:bg-white selection:text-black">
      <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
        <div id="v2-content" className="w-full max-w-[1440px] relative min-h-screen">
          {/* Scroll progress indicator */}
          <ScrollLogo />
          
          {/* Main content with left border */}
          <div className="border-l border-dashed border-white/10 min-h-screen">
            <V2Header />
            <main>
              <V2Hero />
              <V2Clients />
              <V2TrustedBy />
              <V2Projects />
              <V2Academy />
              <V2OpenSource />
              <V2Contact />
            </main>
            <V2Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
