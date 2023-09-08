import React, { ReactNode } from "react";
import LayoutUser from "./LayoutUser";
import LayoutAdmin from "./LayoutAdmin";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutAdmin>
      <main>{children}</main>
    </LayoutAdmin>
  );
};

export default Layout;
