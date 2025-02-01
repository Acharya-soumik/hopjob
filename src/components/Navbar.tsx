'use client'

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from '../app/assets/logo.png'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      // Add background when scrolled
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm" : "",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <div className="relative">
                <Image
                  src={Logo}
                  alt="HopJob"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <Link
              href="/resume-builder"
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Resume Builder
            </Link>
            <Link
              href="/dsa"
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              DSA Platform
            </Link>
            <Link
              href="/community"
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Community
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Pricing
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button variant="outline" asChild>
              <Link href="/login" className="text-gray-500">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
} 