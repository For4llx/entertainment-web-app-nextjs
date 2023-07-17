"use client";

import { useRef } from "react";
import utilsStyles from "@/styles/Utils.module.scss";
import styles from "./Authentification.module.scss";
import AppButton from "@/components/base/AppButton";

export default function AuthentificationLoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const body = JSON.stringify({ email, password });

    if (!email || !password) {
      throw new Error("");
    }

    const response = await fetch("./api/authentification/login", {
      method: "POST",
      body,
    });
  }

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h1 className={`${styles.title} ${utilsStyles.headingLarge}`}>Login</h1>
      <div className={styles.inputGroup}>
        <input
          className={`${utilsStyles.inputField} ${utilsStyles.bodyMedium}`}
          ref={emailRef}
          placeholder="Email"
          type={"text"}
          required
        />
        <input
          className={`${utilsStyles.inputField} ${utilsStyles.bodyMedium}`}
          ref={passwordRef}
          placeholder="Password"
          type={"password"}
          required
        />
      </div>
      <AppButton type="submit">Login to your account</AppButton>
    </form>
  );
}
