import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || 'tushar-2223';

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    
    // Filter out forked repos and sort by stars
    const filteredRepos = repos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);

    return NextResponse.json(filteredRepos);
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
