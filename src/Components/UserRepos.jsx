import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserRepos = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`https://api.github.com/users/${login}/repos`);
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();
  }, [login]);

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl mb-4 text-white text-center">Repositories of {login}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {repo.name}
                </a>
              </h3>
              <p className="text-sm mb-2">{repo.description}</p>
              <p className="text-xs text-gray-400">⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
              <p className="text-xs text-gray-400">📝 {repo.language}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserRepos;
