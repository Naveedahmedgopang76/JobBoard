"use client";

import { SessionProvider as Provider } from "next-auth/react";
import React from "react";
type Props = {
  children: React.ReactNode;
  session:  ReturnType<typeof Provider>["props"]["session"];
};

export default function SessionProvider({ children, session }: Props) {
  return <Provider session={session}>{children}</Provider>;
}