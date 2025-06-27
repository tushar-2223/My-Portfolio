import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { fetchGitHubUser, fetchGitHubRepos } from "@/services/github";

export const GitHubStats = () => {
  const { data: user } = useQuery({
    queryKey: ['github-user'],
    queryFn: fetchGitHubUser,
  });

  const { data: repos } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
  });

  return (
    <section id="github" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GitHub Portfolio
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore my latest projects and contributions on GitHub
          </p>
        </div>

        {/* GitHub User Stats */}
        {user && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {user.public_repos}
                </div>
                <div className="text-white/60 text-sm">Repositories</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {user.followers}
                </div>
                <div className="text-white/60 text-sm">Followers</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {user.following}
                </div>
                <div className="text-white/60 text-sm">Following</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  {user.public_gists}
                </div>
                <div className="text-white/60 text-sm">Gists</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Featured Repositories */}
        {repos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card key={repo.id} className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {repo.description || "No description available"}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-white/60 text-sm">
                      <Star className="h-4 w-4" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1 text-white/60 text-sm">
                      <GitFork className="h-4 w-4" />
                      {repo.forks_count}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {repo.language && (
                      <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                        {repo.language}
                      </Badge>
                    )}
                    <span className="text-white/40 text-xs">
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
