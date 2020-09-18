import React, { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";
import { Link } from 'react-router-dom';
import "./Home.scss";

export default function Home() {
  const [repoList, setRepoList] = useState([]);

  const getRepoList = async () => {
    const octokit = new Octokit();
    const repos = await octokit.repos.getContent({
      owner: "angusryer",
      repo: "demos",
    });
    const filteredRepos = repos.data.filter(
      (repo) => repo.name !== ".DS_Store" && repo.name !== ".gitignore"
    );
    setRepoList(filteredRepos);
  };

  useEffect(() => {
    getRepoList();
  }, [])

  return (
    <nav>
      {repoList.map((repo, i) => (
        <div key={i}><Link to={{
            pathname: `/demos/${repo.name}`,
            state: { selectedRepo: repo }
          }}>{repo.name}</Link></div>
      ))}
    </nav>
  );
}
