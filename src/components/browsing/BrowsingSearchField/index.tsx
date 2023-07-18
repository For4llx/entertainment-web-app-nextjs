import utilsStyles from "@/styles/Utils.module.scss";
import styles from "./BrowsingSearchField.module.scss";

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
}

export default function BrowsingSearchField({ inputRef, placeholder }: IProps) {
  return (
    <input
      className={`${styles.searchField} ${utilsStyles.headingMedium}`}
      ref={inputRef}
      placeholder={placeholder}
      type="text"
      required
    />
  );
}
