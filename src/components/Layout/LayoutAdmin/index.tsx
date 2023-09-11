import React, { ReactNode } from "react";
import NavbarAside from "./NavbarAside";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const LayoutAdmin = ({ children }: Props) => {
  return (
    <div className="layout-admin">
      <NavbarAside />
      <main className="main-wrap">
        <Header />
        <section className="content-main">{children}</section>
        <Footer />
      </main>
    </div>
  );
};

export default LayoutAdmin;
