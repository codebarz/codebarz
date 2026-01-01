import Logo from "./Logo";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Client Portal", href: "#" },
  ],
};

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-white">{title}</h3>
      {links.map((link) => (
        <a
          key={link.label}
          className="text-sm text-white/60 hover:text-white transition-colors"
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/60 text-center">
            © {new Date().getFullYear()} codebarz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
