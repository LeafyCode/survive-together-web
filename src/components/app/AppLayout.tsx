import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <NavBar />

      {children}

      <Footer />
    </div>
  );
};
