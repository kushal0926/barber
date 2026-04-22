"use client"

import About from "@/_components/About";
import Hero from "@/_components/Hero";
import ImageSlider from "@/_components/ImageSlider";
import Logo from "@/_components/Logo";
// import Navbar from "@/_components/Navbar";

export default function Home() {
  return (
    <section className="font-impact">
      <Logo />
      <Hero />
      {/* <Navbar /> */}
      <About/>
      <ImageSlider/>
    </section>
  );
}
