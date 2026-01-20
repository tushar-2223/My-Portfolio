"use client";

import React, { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ExternalLink, Loader2 } from 'lucide-react';
import { AnimatedDotBackground } from './ui/animated-dot-background';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

interface Project {
  id: string;
  title: string;
  url: string;
  logoUrl: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
}

const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const repos: GitHubRepo[] = await response.json();

        const formattedProjects: Project[] = repos.slice(0, 6).map((repo) => ({
          id: repo.id.toString(),
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
          url: repo.html_url.replace('https://', ''),
          logoUrl: `/placeholder.png`,
          description: repo.description || undefined,
          language: repo.language || undefined,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
        }));

        setProjects(formattedProjects);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError('Failed to load projects');
        // Fallback to static projects
        setProjects([
          { id: "1", title: "My Portfolio", url: "github.com/tushar-2223/My-Portfolio", logoUrl: "/placeholder.svg" },
          { id: "2", title: "React Native App", url: "github.com/tushar-2223", logoUrl: "/placeholder.svg" },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <AnimatedDotBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-tight">
            PROJECTS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of tools and applications I've built to solve real-world problems
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/tushar-2223"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 justify-center items-center text-zinc-500 hover:text-white transition-all ease-linear group"
            aria-label="Visit GitHub to see more projects"
          >
            <span className="text-lg font-medium">Visit GitHub to see More</span>
            <ExternalLink
              className="w-5 h-5 stroke-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
