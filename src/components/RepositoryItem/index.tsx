import { IRespository } from "../../@types/Repository";
import "./styles.scss";

interface IRepositoryItemProps {
  repository: IRespository;
}

export function RepositoryItem({ repository }: IRepositoryItemProps) {
  return (
    <li className="repo">
      <strong className="repoName">{repository?.name}</strong>
      <p className="repoDesc">{repository?.description}</p>

      <a href={repository?.link_repo} target="_blank" className="accessRepo">
        Access repository
      </a>
    </li>
  );
}
