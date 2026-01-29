import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // Security check: Only allow requests with the correct API secret
  const secret = req.headers.get("x-api-secret")
  if (secret !== process.env.INTERNAL_API_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const token = process.env.GITHUB_TOKEN;
  const targetRepoIds = [617347036, 564415983, 848912262, 1141031041,1141031572 ];

  try {
    const repos = await Promise.all(
      targetRepoIds.map(async (repoId) => {
        const response = await fetch(
          `https://api.github.com/repositories/${repoId}`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
              Accept: 'application/vnd.github.v3+json',
            },
            next: { revalidate: 3600 },
          } as any
        );

        if (!response.ok) {
          console.error(`Failed to fetch repo ID ${repoId}: ${response.status}`);
          return null;
        }

        return response.json();
      })
    );

    const filteredRepos = repos.filter((repo) => repo !== null);
    
    // Log the fetched repositories for verification
    console.log('Fetched Targeted Repositories:');
    filteredRepos.forEach((repo: any) => {
      console.log(`ID: ${repo.id}, Name: ${repo.name}`);
    });

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
