import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Solution from "../components/Solution";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <Features />
      <Solution />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;