import Link from "next/link";
import LoginForm from "./AuthentificationLoginForm";
import styles from "./Authentification.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

export default function AuthentificationLogin() {
  return (
    <article className={styles.container}>
      <LoginForm />
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
