"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  // Application initial load state (Preloader chalana hai ya nahi)
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full min-h-screen bg-[#110E1B]">
      {/* SPA Routing Logic: Agar loading true hai toh Header(Preloader) dikhao, warna Navbar aur Hero Section */}
      {isLoading ? (
        <Header onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </main>
  );
}