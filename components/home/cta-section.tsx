"use client";

import { ArrowRightIcon, MailboxIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { createPageUrl } from "@/lib/utils";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Track mounted state to prevent setState after unmount
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setIsSubscribed(true);
    setEmail("");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (mountedRef.current) {
        setIsSubscribed(false);
      }
    }, 3000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-blue-600 to-pink-500 p-12 mr-2 lg:mr-8 neo-brutalist-border neo-brutalist-shadow transform -rotate-1">
          <div className="bg-white p-8 neo-brutalist-border transform rotate-2">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black mb-6">
                <span className="block transform -rotate-1">READY TO</span>
                <span className="block text-blue-600 transform rotate-1">
                  GO DIGITAL?
                </span>
              </h2>

              <p className="text-xl font-bold text-gray-700 mb-8 leading-normal md:leading-[1.7]">
                Join 50+ local businesses who&apos;ve transformed their online
                presence with
                <HighlightedText className="bg-blue-500 text-white ml-2">
                  MOGEN
                </HighlightedText>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href={createPageUrl("Contact")}>
                  <Button className="bg-purple-500 text-white font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow hover:bg-purple-600 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer">
                    START YOUR PROJECT
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href={createPageUrl("Pricing")}>
                  <Button
                    variant="outline"
                    className="font-black text-lg px-8 py-4 neo-brutalist-border neo-brutalist-shadow bg-white hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 hover:cursor-pointer"
                  >
                    VIEW PACKAGES
                  </Button>
                </Link>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-100 p-6 neo-brutalist-border neo-brutalist-shadow-sm transform rotate-1 max-w-md mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <MailboxIcon className="w-5 h-5 text-lime-500" />
                  <span className="font-black">GET FREE TIPS</span>
                </div>

                {isSubscribed ? (
                  <div className="bg-lime-400 text-black px-4 py-3 neo-brutalist-border font-black">
                    THANKS FOR SUBSCRIBING! ✨
                  </div>
                ) : (
                  <form
                    action="https://formsubmit.co/info@mogen.co.za"
                    method="POST"
                    className="flex gap-2"
                    onSubmit={handleSubscribe}
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="neo-brutalist-border font-bold"
                    />
                    <Button
                      type="submit"
                      className="bg-lime-400 text-black font-black neo-brutalist-border neo-brutalist-shadow-sm hover:cursor-pointer"
                    >
                      GO!
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
