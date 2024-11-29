interface ContributorsProps {
  githubUserNames: string[];
}

export default function Contributors({ githubUserNames }: ContributorsProps) {
  return (
    <div className="flex gap-2">
      Contributors:
      {githubUserNames.map((username) => (
        <a
          key={username}
          className="hover:underline hover:text-primary"
          href={`https://www.github.com/${username}`}
          target="_blank"
        >
          {username}
        </a>
      ))}
    </div>
  );
}
