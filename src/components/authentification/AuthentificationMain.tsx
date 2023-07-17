import styles from "./Authentification.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function AuthentificationMain({ children }: IProps) {
  return (
    <main className={`${styles.main} ${utilsStyles.container}`}>
      {children}
    </main>
  );
}
