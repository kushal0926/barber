import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed right-10 bottom-5 z-30 flex flex-col items-start gap-1 ">
      {[
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Our Team", href: "/our-team" },
        { label: "Book Online", href: "/book-online" },
      ].map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-right text-white font-bold text-xl uppercase hover:text-[#E8001D] transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
