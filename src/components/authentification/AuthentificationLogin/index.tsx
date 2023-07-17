import Link from "next/link";
import styles from "./AuthentificationLogin.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";
import AuthentificationLoginForm from "../AuthentificationLoginForm";

export default function AuthentificationLogin() {
  return (
    <article className={styles.container}>
      <AuthentificationLoginForm />
      <div className={styles.navigation}>
        <p className={`${styles.paragraph} ${utilsStyles.bodyMedium}`}>
          Don't have an account?
        </p>
        <Link
          className={`${styles.link} ${utilsStyles.bodyMedium}`}
          href={"./signup"}
        >
          Sign Up
        </Link>
      </div>
    </article>
  );
}
