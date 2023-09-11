import React, { ReactNode } from "react";
import LayoutUser from "./LayoutUser";
import LayoutAdmin from "./LayoutAdmin";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();

  if (pathname.includes("/admin")) {
    return (
      <LayoutAdmin>
        <main>{children}</main>
      </LayoutAdmin>
    );
  }

  return (
    <LayoutUser>
      <main>{children}</main>
    </LayoutUser>
  );
};

export default Layout;
