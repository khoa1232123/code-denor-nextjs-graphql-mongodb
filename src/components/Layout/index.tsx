import React, { ReactNode } from "react";
import LayoutUser from "./LayoutUser";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutUser>
      <main>{children}</main>
    </LayoutUser>
  );
};

export default Layout;
