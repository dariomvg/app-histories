import { PropsCardHistory } from "@/types/types";
import iconTrash from "@/assets/icon-trash.svg";
import "@/styles/card-history.css";

export const CardHistory = ({ history, removeHistory }: PropsCardHistory) => {
  return (
    <div>
      <img
        src={iconTrash.src}
        className="icon-delete"
        width={33}
        height={33}
        onClick={() => removeHistory(history.id)}
        title="delete this history"
      />
      <img
        src={history.url}
        alt="image history"
        width={300}
        height={500}
        className="image-card"
        loading="lazy"
      />
    </div>
  );
};
