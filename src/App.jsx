import React from "react";
import { TopAppBar } from "./components/TopAppBar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased selection:bg-primary-container selection:text-surface">
      {/* Top App Bar Header */}
      <TopAppBar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Journey />
        <Contact />
      </main>

      {/* Web Footer */}
      <Footer />
    </div>
  );
}
