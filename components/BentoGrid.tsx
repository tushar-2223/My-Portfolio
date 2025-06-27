"use client";

import { Box, Lock, Search, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const BentoGrid = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-gray-400 text-lg">
            Specializing in modern web development and user experience
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-blue-400" />}
            title="Full Stack Development"
            description="Building scalable web applications with modern technologies and best practices."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Sparkles className="h-4 w-4 text-purple-400" />}
            title="UI/UX Design"
            description="Creating beautiful and intuitive user interfaces that enhance user experience."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-green-400" />}
            title="Performance Optimization"
            description="Optimizing applications for speed, SEO, and accessibility standards."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Search className="h-4 w-4 text-cyan-400" />}
            title="Modern Technologies"
            description="React, TypeScript, Next.js, Node.js, and cloud deployment solutions."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Sparkles className="h-4 w-4 text-pink-400" />}
            title="Continuous Learning"
            description="Always exploring new technologies and sharing knowledge through blog posts."
          />
        </ul>
      </div>
    </section>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-700/50 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600/50 p-2 bg-gray-800/50">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
