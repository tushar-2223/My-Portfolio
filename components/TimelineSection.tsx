
import { Timeline } from "@/components/ui/timeline";

export const TimelineSection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2">Senior Full Stack Developer</h3>
            <p className="text-blue-400 font-medium mb-2">Tech Innovation Co.</p>
            <p className="text-gray-300 mb-4">
              Leading development of scalable web applications using modern tech stack including React, TypeScript, and cloud technologies.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Built enterprise-level applications
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Led team of 5+ developers
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Implemented CI/CD pipelines
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2">Full Stack Developer</h3>
            <p className="text-blue-400 font-medium mb-2">Digital Solutions Ltd.</p>
            <p className="text-gray-300 mb-4">
              Developed and maintained multiple client projects using React, Node.js, and various databases.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Delivered 10+ client projects
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Reduced load times by 40%
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Mentored junior developers
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2">Frontend Developer</h3>
            <p className="text-blue-400 font-medium mb-2">StartupXYZ</p>
            <p className="text-gray-300 mb-4">
              Built responsive web applications and improved user experience across multiple platforms.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Increased user engagement by 60%
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Implemented modern UI/UX designs
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              ✅ Optimized for mobile devices
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white mb-2">Bachelor's in Computer Science</h3>
            <p className="text-purple-400 font-medium mb-2">University of Technology</p>
            <p className="text-gray-300 mb-4">
              Graduated with honors, specializing in software development and computer science fundamentals.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              🎓 Graduated with honors
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              🎓 Specialized in software development
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              🎓 Completed multiple internships
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={timelineData} />;
};
