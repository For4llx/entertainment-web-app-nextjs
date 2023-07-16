"use client";

import AppButton from "@/components/base/AppButton";
import AppInputField from "@/components/base/AppInputField";
import { useRef } from "react";

export default function AuthentificationSignup() {
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

    const response = await fetch("./api/authentification/signup", {
      method: "POST",
      body,
    });
  }

  return (
    <form onSubmit={handleSignup}>
      <h1>Sign Up</h1>
      <div>
        <AppInputField
          ref={emailRef}
          placeholder="Email"
          type="text"
          required
        />
        <AppInputField
          ref={passwordRef}
          placeholder="Password"
          type="password"
          required
        />
        <AppInputField
          ref={passwordRepeatedRef}
          placeholder="Repeat password"
          type="password"
          required
        />
      </div>
      <AppButton type="submit">Create an account</AppButton>
    </form>
  );
}
