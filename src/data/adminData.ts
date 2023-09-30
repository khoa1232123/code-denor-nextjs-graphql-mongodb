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
      {
        icon: "",
        title: "Attributes",
        link: "/admin/products/attributes",
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
        link: "/admin/posts",
      },
      {
        icon: "",
        title: "Create",
        link: "/admin/posts/create",
      },
      {
        icon: "",
        title: "Categories",
        link: "/admin/posts/categories",
      },
    ],
  },
];
