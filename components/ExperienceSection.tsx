"use client";

import { Timeline } from "@/components/ui/timeline";

export const ExperienceSection = () => {
    const data = [
        {
            title: "Dec 2023 - Present",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Software Developer</h3>
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">WebMobTech Solutions Pvt. Ltd.</h4>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Specializing in React Native and Flutter. Designed and developed mobile apps with clean architecture and efficient state management (RxDart, Redux). Integrated APIs, authentication, and managed app store deployments.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["React Native", "Flutter", "Dart", "Redux", "RxDart", "TypeScript"].map((tech, i) => (
                            <span key={i} className="text-xs font-medium text-zinc-400 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "April 2023 - June 2023",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Web Developer Intern</h3>
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">PHN Technology Pvt Ltd</h4>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Contributed to UI development and feature implementation. Gained hands-on experience with React.js and Next.js, building responsive web applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["React.js", "Next.js", "JavaScript", "HTML/CSS"].map((tech, i) => (
                            <span key={i} className="text-xs font-medium text-zinc-400 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "May 2023 - June 2023",
            content: (
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">ReactJs Developer</h3>
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">TatvaSoft</h4>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Worked on ReactJs development, improving skills in frontend tools and component-based architecture.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["React.js", "JavaScript", "Frontend Tools"].map((tech, i) => (
                            <span key={i} className="text-xs font-medium text-zinc-400 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ),
        }
    ];

    return (
        <section id="experience" className="bg-black">
            <Timeline data={data} />
        </section>
    );
};
