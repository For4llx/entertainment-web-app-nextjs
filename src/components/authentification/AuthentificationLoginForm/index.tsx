"use client";

import { useContext, useRef } from "react";
import styles from "./AuthentificationLoginForm.module.scss";
import AppButton from "@/components/base/AppButton";
import AppHeading from "@/components/base/AppHeading";
import AppInputField from "@/components/base/AppInputField";
import { AuthentificationContext } from "@/provider/AuthentificationProvider";
import { useRouter } from "next/navigation";

export default function AuthentificationLoginForm() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setToken, setUser } = useContext(AuthentificationContext);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const body = JSON.stringify({ email, password });

    if (!email || !password) {
      throw new Error("");
    }
    const response = await fetch(
      "http://localhost:3000/api/authentification/login",
      {
        method: "POST",
        body,
      }
    );
    const data = await response.json();
    setToken(data.token);
    setUser(data.currentUser);
    router.push("http://localhost:3000/browsing/home");
  }

  return (
    <form className={styles.container} onSubmit={handleLogin}>
      <AppHeading size="headingLarge" color="pureWhite">
        Login
      </AppHeading>
      <div className={styles.inputGroup}>
        <AppInputField
          inputRef={emailRef}
          placeholder="Email"
          type={"text"}
          required
        />
        <AppInputField
          inputRef={passwordRef}
          placeholder="Password"
          type={"password"}
          required
        />
      </div>
      <AppButton type="submit">Login to your account</AppButton>
    </form>
  );
}
