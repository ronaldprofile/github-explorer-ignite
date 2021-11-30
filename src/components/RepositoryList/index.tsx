import { useEffect, useState } from "react";
import { IRespository } from "../../@types/Repository";
import { RepositoryItem } from "../RepositoryItem/index";
import "./styles.scss";

export function RepositoryList() {
  const [respositories, setRespositories] = useState<IRespository[]>([]);

  function getRespositories() {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then(response => response.json())
      .then(data => {
        setRespositories(data);
      });
  }

  useEffect(() => {
    getRespositories();
  }, []);

  return (
    <section className="repositoryList">
      <h1>List Repositories</h1>

      <ul>
        {respositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
