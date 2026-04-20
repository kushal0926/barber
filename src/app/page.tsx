"use client"

import Hero from "@/_components/Hero";
import Logo from "@/_components/Logo";
import Navbar from "@/_components/Navbar";

export default function Home() {
  return (
    <section className="font-impact main">
      <Logo />
      <Hero />
      <Navbar />
      <div className="h-screen"></div>
    </section>
  );
}
