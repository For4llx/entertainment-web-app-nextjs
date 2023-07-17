import AppLogo from "@/components/base/AppLogo";
import styles from "./Authentification.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

export default function AuthentificationHeader() {
  return (
    <header className={`${utilsStyles.container} ${styles.header}`}>
      <AppLogo />
    </header>
  );
}
