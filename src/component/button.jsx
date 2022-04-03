import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonBack = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="bg-slate-300 shadow rounded px-2 py-1 w-20"
      onClick={() => window.history.back()}
    >
      <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
      {text || "返回"}
    </button>
  );
};
