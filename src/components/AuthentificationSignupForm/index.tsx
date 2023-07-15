"use client";

import { useRef } from "react";

export default function SignupForm() {
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

    const response = await fetch("./api/signup", {
      method: "POST",
      body,
    });
  }

  return (
    <form onSubmit={handleSignup}>
      <h1>Sign Up</h1>
      <div>
        <input ref={emailRef} placeholder="Email" type="text" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <input
          ref={passwordRepeatedRef}
          placeholder="Repeat password"
          type="password"
        />
      </div>
      <button type="submit">Create an account</button>
    </form>
  );
}
