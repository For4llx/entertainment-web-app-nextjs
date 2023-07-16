import AppParagraph from "@/components/base/AppParagraph";
import Link from "next/link";
import LoginForm from "../AuthentificationLoginForm";
import styles from "./AuthentificationLogin.module.scss";

export default function AuthentificationLogin() {
  return (
    <article className={styles.container}>
      <LoginForm />
      <div>
        <AppParagraph>Don't have an account?</AppParagraph>
        <Link href={"./signup"}>Sign Up</Link>
      </div>
    </article>
  );
}
