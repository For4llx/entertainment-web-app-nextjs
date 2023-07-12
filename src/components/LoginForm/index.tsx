"use client";

import { useRef } from "react";

export default function LoginForm() {
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

    const response = await fetch("./api/login", {
      method: "POST",
      body,
    });
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div>
        <input ref={emailRef} placeholder="Email" type="text" required />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          required
        />
      </div>
      <button type="submit">Login to your account</button>
    </form>
  );
}
