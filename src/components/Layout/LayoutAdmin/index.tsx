import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LayoutAdmin = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default LayoutAdmin;
