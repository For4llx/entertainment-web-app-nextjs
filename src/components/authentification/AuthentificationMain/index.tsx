import styles from "./AuthentificationMain.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function AuthentificationMain({ children }: IProps) {
  return (
    <main className={`${styles.container} ${utilsStyles.container}`}>
      {children}
    </main>
  );
}
