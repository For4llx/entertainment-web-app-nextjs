"use client";

import AppButton from "@/components/base/AppButton";
import { useRef } from "react";
import styles from "./AuthentificationSignupForm.module.scss";
import AppHeading from "@/components/base/AppHeading";
import AppInputField from "@/components/base/AppInputField";

export default function AuthentificationSignupForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatedRef = useRef<HTMLInputElement>(null);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const passwordRepeated = passwordRepeatedRef?.current?.value;
    const body = JSON.stringify({ email, password, passwordRepeated });

    if (!email || !password || !passwordRepeated) {
      throw new Error("Misisng a field");
    }

    const response = await fetch(
      "http://localhost:3000/api/authentification/signup",
      {
        method: "POST",
        body,
      }
    );
  }

  return (
    <form className={styles.container} onSubmit={handleSignup}>
      <AppHeading size="headingLarge" color="pureWhite">
        Sign Up
      </AppHeading>
      <div className={styles.inputGroup}>
        <AppInputField
          inputRef={emailRef}
          placeholder="Email"
          type="text"
          required
        />
        <AppInputField
          inputRef={passwordRef}
          placeholder="Password"
          type="password"
          required
        />
        <AppInputField
          inputRef={passwordRepeatedRef}
          placeholder="Repeat password"
          type="password"
          required
        />
      </div>
      <AppButton type="submit">Create an account</AppButton>
    </form>
  );
}
