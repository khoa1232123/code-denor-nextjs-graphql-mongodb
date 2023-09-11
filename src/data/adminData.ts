import { navbarType } from "./types";

export const navbarData: navbarType[] = [
  {
    icon: "md-home",
    title: "Dashboard",
    link: "/admin/",
  },
  {
    icon: "md-shopping_bag",
    title: "Products",
    link: "/admin/products",
    subMenu: [
      {
        icon: "",
        title: "List",
        link: "/admin/products",
      },
      {
        icon: "",
        title: "Create",
        link: "/admin/products/create",
      },
      {
        icon: "",
        title: "Categories",
        link: "/admin/products/categories",
      },
    ],
  },
  {
    icon: "md-shopping_cart",
    title: "Orders",
    link: "/",
  },
  {
    icon: "md-description",
    title: "Posts",
    link: "/",
    subMenu: [
      {
        icon: "",
        title: "List",
        link: "/",
      },
      {
        icon: "",
        title: "Create",
        link: "/",
      },
      {
        icon: "",
        title: "Categories",
        link: "/",
      },
    ],
  },
];
