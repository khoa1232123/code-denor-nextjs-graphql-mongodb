import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  titleClick?: string;
  children?: React.ReactNode;
};

const ContentHeader = ({
  title,
  description,
  onClick,
  titleClick,
  children,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title} - Admin Dashboard</title>
      </Head>
      <div className="content-header">
        <div>
          <h2 className="content-title card-title">{title}</h2>
          <p>{description}</p>
        </div>
        {titleClick && (
          <div onClick={onClick}>
            <div className="btn btn-primary">
              <i className="text-muted material-icons md-post_add"></i>
              {titleClick}
            </div>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default ContentHeader;
