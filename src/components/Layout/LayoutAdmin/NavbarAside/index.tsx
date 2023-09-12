import { navbarData } from "@/data/adminData";
import { navbarType } from "@/data/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

const NavbarAside = (props: Props) => {
  return (
    <aside className="navbar-aside" id="offcanvas_aside">
      <div className="aside-top">
        <Link href={"/"} className="brand-wrap">
          <img
            src="/assets-admin/imgs/theme/logo.svg"
            className="logo"
            alt="Nest Dashboard"
          />
        </Link>
        <div>
          <button className="btn btn-icon btn-aside-minimize">
            <i className="text-muted material-icons md-menu_open"></i>
          </button>
        </div>
      </div>
      <nav>
        <ul className="menu-aside">
          {navbarData.map((item, index) => (
            <MenuItem item={item} key={item.title} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

type MenuItemProps = {
  item: navbarType;
};

const MenuItem = ({ item }: MenuItemProps) => {
  const router = useRouter();
  const [subMenuItemActive, setSubMenuItemActive] = useState(false);
  const handleClickItem = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (item?.subMenu && item?.subMenu.length > 0) {
      setSubMenuItemActive(!subMenuItemActive);
    } else {
      router.push(item.link);
    }
  };

  return (
    <li
      className={`menu-item ${
        item?.subMenu && item?.subMenu.length > 0 && "has-submenu"
      }`}
    >
      <a className="menu-link" onClick={handleClickItem}>
        <i className={`icon material-icons ${item.icon}`}></i>
        <span className="text">{item.title}</span>
      </a>
      {item?.subMenu && item?.subMenu.length > 0 && (
        <div className={`submenu ${subMenuItemActive && "active"}`}>
          {item.subMenu.map((it, index) => (
            <Link href={it.link} key={index}>
              <i className="icon material-icons md-shopping_bag"></i>
              {it.title}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default NavbarAside;
