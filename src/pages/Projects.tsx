import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Arseny15/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch repositories');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">Projects</h1> {/* Updated to dark blue */}
      <h2 className="text-xl text-blue-900">
        Here are my projects from my{" "}
        <a href="https://github.com/Arseny15" className="text-pink-600">
          Github
        </a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2 text-blue-900">
              <a
                href={repo.html_url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
            </h2>
            <p className="text-gray-700 mb-2">{repo.description}</p>
            <p className="text-gray-500 text-sm">
              Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
            </p>
            <p className="text-gray-500 text-sm">
              Updated: {new Date(repo.updated_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
