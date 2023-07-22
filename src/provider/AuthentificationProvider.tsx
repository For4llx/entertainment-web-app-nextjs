"use client";

import { IUser } from "@/interfaces/user";
import { createContext, useContext, useState } from "react";

interface IContext {
  user: IUser;
  token: string;
  setUser: Function;
  setToken: Function;
}

export const AuthentificationContext = createContext<IContext>({} as IContext);

interface IProps {
  children: React.ReactNode;
}

export function AuthentificationProvider({ children }: IProps) {
  const [user, setUser] = useState<IUser>({
    id: 0,
    email: "",
    password: "",
    avatar: "",
    collections: [],
  });
  const [token, setToken] = useState<string>("");

  return (
    <AuthentificationContext.Provider
      value={{ user, setUser, token, setToken }}
    >
      {children}
    </AuthentificationContext.Provider>
  );
}

export function useAuthentificationContext(): IContext {
  return useContext(AuthentificationContext);
}
