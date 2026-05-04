"use client";

import About from "@/_components/About";
import Hero from "@/_components/Hero";
import ImageSlider from "@/_components/ImageSlider";
import Logo from "@/_components/Logo";
import ScrollProgress from "@/_components/ScrollProgress";
// import Navbar from "@/_components/Navbar";

export default function Home() {
  return (
    <main className="relative overflow-x-clip font-impact">
      <ScrollProgress />
      <Logo />
      <Hero />
      {/* <Navbar /> */}
      <About />
      <ImageSlider />
    </main>
  );
}
