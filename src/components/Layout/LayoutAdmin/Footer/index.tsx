import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="main-footer font-xs">
      <div className="row pb-30 pt-15">
        <div className="col-sm-6">&copy; Nest - HTML Ecommerce Template .</div>
        <div className="col-sm-6">
          <div className="text-sm-end">All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
