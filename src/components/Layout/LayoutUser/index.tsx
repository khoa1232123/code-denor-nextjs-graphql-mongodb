import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const LayoutUser = ({ children }: Props) => {
  return (
    <div className="layout-user">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutUser;
