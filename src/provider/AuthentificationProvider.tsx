"use client";

import { IUser } from "@/interfaces/user";
import { createContext, useState } from "react";

interface IContext {
  user: IUser | undefined;
  token: string;
  setUser: Function;
  setToken: Function;
}

export const AuthentificationContext = createContext<IContext>({} as IContext);

interface IProps {
  children: React.ReactNode;
}

export default function AuthentificationProvider({ children }: IProps) {
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<string>("");

  return (
    <AuthentificationContext.Provider
      value={{ user, setUser, token, setToken }}
    >
      {children}
    </AuthentificationContext.Provider>
  );
}
