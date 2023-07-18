"use client";

import { useRef } from "react";
import styles from "./AuthentificationLoginForm.module.scss";
import AppButton from "@/components/base/AppButton";
import AppHeading from "@/components/base/AppHeading";
import AppInputField from "@/components/base/AppInputField";

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
    <form className={styles.container} onSubmit={handleLogin}>
      <AppHeading size="headingLarge" color="pureWhite">
        Login
      </AppHeading>
      <div className={styles.inputGroup}>
        <AppInputField
          ref={emailRef}
          placeholder="Email"
          type={"text"}
          required
        />
        <AppInputField
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
